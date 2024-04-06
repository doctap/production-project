import { classNames } from 'shared/lib'
import cls from './NavBar.module.scss'

export interface INavBarProps {
  className?: string
}

export const NavBar = ({ className = '' }: INavBarProps) => (
  <div className={classNames(cls.NavBar, [className])}>/</div>
)
