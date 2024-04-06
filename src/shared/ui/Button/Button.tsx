import { classNames } from 'shared/lib'
import type { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  RELOAD = 'reload',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme: ButtonTheme
  square?: boolean
  size?: string
}

export const Button: FC<IButtonProps> = props => {
  const {
    children,
    className = '',
    onClick,
    theme,
    square = false,
    size = ButtonSize.M,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(cls.Button, [className], mods)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
