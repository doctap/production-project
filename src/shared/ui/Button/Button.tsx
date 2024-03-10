import { classNames } from 'shared/lib'
import type { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  RELOAD = 'reload',
  OUTLINE = 'outline',
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme: ButtonTheme
}

export const Button: FC<IButtonProps> = props => {
  const {
    children, className = '', onClick, theme, ...otherProps
  } = props
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(cls.Button, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
