import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface IUseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const value = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(value)
    document.body.className = value
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, value)
  }

  return { theme, toggleTheme }
}
