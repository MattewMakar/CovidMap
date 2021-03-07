import { createContext } from "react";

export interface Theme {
  sideBarBackgroundColor: string;
  sideBarColor: string;
  toolBar: string;
  tableBackground: string;
}
export interface ThemeState{
  currentTheme: Theme;
  setCurrentTheme: (currentTheme: Theme) => void;
}

export const themeContext = createContext<ThemeState | any>([]);