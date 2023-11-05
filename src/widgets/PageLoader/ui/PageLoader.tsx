import { classNames } from 'shared/lib'
import cls from './PageLoader.module.scss'
import { Loader } from 'shared/ui'

export interface IPageLoaderProps {
  className?: string
}

export const PageLoader = ({ className = '' }: IPageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, [className])}>
        <Loader />
    </div>
  )
}
