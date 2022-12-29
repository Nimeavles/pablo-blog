import { createContext, Dispatch, SetStateAction } from "react";

interface Context {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext({} as Context);
