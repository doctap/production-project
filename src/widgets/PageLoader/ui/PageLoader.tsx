import { classNames } from 'shared/lib'
import { Loader } from 'shared/ui'
import cls from './PageLoader.module.scss'

export interface IPageLoaderProps {
  className?: string
}

export const PageLoader = ({ className = '' }: IPageLoaderProps) => (
  <div className={classNames(cls.PageLoader, [className])}>
    <Loader />
  </div>
)
