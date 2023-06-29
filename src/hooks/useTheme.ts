import { useCallback, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<"--light" | "--dark">("--light");

  const onToggleTheme = useCallback(() => {
    const { body } = document;

    theme === "--light"
      ? (body.style.backgroundColor = "black") && setTheme("--dark")
      : (body.style.backgroundColor = "white") && setTheme("--light");
  }, [theme]);

  return { theme, onToggleTheme };
};

export default useTheme;
