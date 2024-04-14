import { type FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT

interface IThemeProvider {
  initialTheme?: Theme
}

export const ThemeProvider: FC<IThemeProvider> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme)

  const defaultValue = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  )
}
