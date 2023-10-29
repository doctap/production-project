import { classNames } from 'shared/lib'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { Button, ButtonTheme } from '../../shared/ui/Button/Button'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, [className])}
    >
      {Theme.DARK === theme ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}
