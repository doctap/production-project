import { classNames } from 'shared/lib'
import { AppLink, AppLinkTheme } from 'shared/ui'
import cls from './NavBar.module.scss'

export interface INavBarProps {
  className?: string
}

export const NavBar = ({ className = '' }: INavBarProps) => (
  <div className={classNames(cls.NavBar, [className])}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.INVERTED} to="/">Main</AppLink>
      <AppLink theme={AppLinkTheme.INVERTED} to="/about">About</AppLink>
    </div>
  </div>
)
