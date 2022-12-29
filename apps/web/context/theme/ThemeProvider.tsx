import { FC, useState } from "react";
import { ThemeContext } from "./ThemeContext";

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
