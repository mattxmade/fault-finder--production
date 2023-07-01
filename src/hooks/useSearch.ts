import React, {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
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

  useEffect(() => {
    if (query?.length) {
      if (results) setResults([]);

      const searchResults = faultSearch(query);
      if (searchResults) setResults(searchResults);
    }
  }, [query]);

  // local storage
  useEffect(() => {
    if (!query.length) localStorage.removeItem("query");
    if (results.length) localStorage.setItem("query", query);
  }, [query, results]);

  return { query, results, onInputChange, onFormSubmit };
};

export default useSearch;
