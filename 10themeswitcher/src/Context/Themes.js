import { createContext,useContext } from "react";

export const ThemesContext = createContext(
  {
    themeMode:'light',
    darkTheme:() => {},
    lightTheme:() => {},
  }
)

export const ThemesProvider = ThemesContext.Provider
export default function useTheme(){
  return useContext(ThemesContext)
}