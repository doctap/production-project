import { createContext } from 'react'

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}

interface IThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps)
export const LOCAL_STORAGE_THEME_KEY = 'theme'
