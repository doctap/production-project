import { classNames } from 'shared/lib'
import { Link, type LinkProps } from 'react-router-dom'
import type { FC } from 'react'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  RED = 'red',
}

export interface IAppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<IAppLinkProps> = props => {
  const {
    to, className = '', children, theme = AppLinkTheme.PRIMARY, ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
