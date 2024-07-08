import { classNames } from 'shared/lib'
import { memo, type ButtonHTMLAttributes, type FC } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
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
  disabled?: boolean
}

export const Button = memo((props: IButtonProps) => {
    const {
        children,
        className = '',
        onClick,
        theme,
        disabled = false,
        square = false,
        size = ButtonSize.M,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
})
