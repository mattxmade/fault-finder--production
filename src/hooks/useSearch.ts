import React, { FormEvent, useCallback, useEffect, useState } from "react";

import faultSearch from "../utils/faultSearch";

const useSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);

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

  return { query, results, onInputChange, onFormSubmit };
};

export default useSearch;
