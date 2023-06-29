import { useCallback, useEffect, useState } from "react";

const localTheme = localStorage.getItem("theme");

const useTheme = () => {
  const [theme, setTheme] = useState<string>(localTheme ?? "--light");

  const onToggleTheme = useCallback(() => {
    theme === "--light" ? setTheme("--dark") : setTheme("--light");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, onToggleTheme };
};

export default useTheme;
