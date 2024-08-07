import { classNames } from 'shared/lib'
import { memo } from 'react'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export interface ITextProps {
  className?: string
  text?: string
  title?: string
  theme?: TextTheme
}

export const Text = memo((props: ITextProps) => {
    const {
        className = '',
        text,
        title,
        theme = TextTheme.PRIMARY,
    } = props

    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
