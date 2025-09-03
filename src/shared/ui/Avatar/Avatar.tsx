import { classNames } from 'shared/lib'
import cls from './Avatar.module.scss'

export interface IAvatarProps {
    className?: string
    src?: string
    alt?: string
    size?: number
}

export const Avatar = ({
    className = '',
    src,
    alt,
    size = 100,
}: IAvatarProps) => (
    <img
        src={src}
        alt={alt}
        height={size}
        width={size}
        className={classNames(cls.Avatar, {}, [className])}
    />
)
