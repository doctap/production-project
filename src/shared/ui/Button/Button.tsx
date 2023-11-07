import { classNames } from 'shared/lib'
import cls from './Button.module.scss'
import type { ButtonHTMLAttributes, FC } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  RELOAD = 'reload'
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme: ButtonTheme
}

export const Button: FC<IButtonProps> = (props) => {
  const { children, className = '', onClick, theme, ...otherProps } = props
  return (
    <button
      onClick={onClick}
      className={classNames(cls.Button, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
