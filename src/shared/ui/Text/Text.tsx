import { classNames } from 'shared/lib'
import { memo } from 'react'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum AlignMode {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export interface ITextProps {
  className?: string
  text?: string
  title?: string
  theme?: TextTheme
  align?: AlignMode
}

export const Text = memo((props: ITextProps) => {
    const {
        className = '',
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = AlignMode.LEFT,
    } = props

    return (
        <div className={classNames(cls.Text, {}, [cls[align], cls[theme], className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
