import { classNames } from 'shared/lib'
import cls from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui'
import { useTranslation } from 'react-i18next'

export interface INavBarProps {
  className?: string
}

export const NavBar = ({ className }: INavBarProps) => {
  return (
    <div className={classNames(cls.NavBar, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.INVERTED} to='/'>Main</ AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to='/about'>About</ AppLink>
      </div>
    </div>
  )
}
