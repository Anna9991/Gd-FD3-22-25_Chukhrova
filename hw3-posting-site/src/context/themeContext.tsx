import { createContext, useContext, useState, ReactNode } from "react"


export type ColorTheme = "blue" | "red";

export type ColorThemeContext = {
  theme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
  toggle: () => void;
}

export const themeContext = createContext<ColorThemeContext>({} as ColorThemeContext);

export const useColorThemeContext = () => useContext(themeContext);

export const ColorThemeProvider = (props: {children?: ReactNode}) => {
  const [theme, setTheme] = useState<ColorTheme>('red');

  function toggle() {
    setTheme(prev => prev === 'red' ? 'blue' : 'red')
  }

  return (
    <themeContext.Provider value={ {theme, setTheme, toggle} }>
      {props.children}
    </themeContext.Provider>
  );
};