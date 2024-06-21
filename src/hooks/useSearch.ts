import React, {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import faultSearch from "../utils/faultSearch";

const lastSessionQuery = localStorage.getItem("query");

const useSearch = () => {
  const restoreSession = useRef(true);

  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);

  // restore last session
  if (lastSessionQuery && restoreSession.current) {
    restoreSession.current = false;
    setQuery(lastSessionQuery);
  }

  const onClearInput = useCallback(() => setQuery(""), []);

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      const input = e.target as HTMLInputElement;
      setQuery(input.value);
    },
    [query]
  );

  const onFormSubmit = useCallback(
    (e: FormEvent) => e.preventDefault(),
    [onInputChange]
  );

  const getResults = async () => {
    if (query?.length) {
      if (results) setResults([]);

      const searchResults = await faultSearch(query);
      if (searchResults) setResults(searchResults);
    }
  };

  useEffect(() => {
    getResults();
  }, [query]);

  // local storage
  useEffect(() => {
    if (!query.length) localStorage.removeItem("query");
    if (results.length) localStorage.setItem("query", query);
  }, [query, results]);

  return { query, results, onClearInput, onInputChange, onFormSubmit };
};

export default useSearch;
