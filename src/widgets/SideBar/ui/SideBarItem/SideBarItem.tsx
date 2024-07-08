import { memo } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui'
import { ISideBarItem } from '../../model/item'
import cls from './SideBarItem.module.scss'

export interface ISideBarItemProps {
  item: ISideBarItem
  collapsed: boolean
}

export const SideBarItem = memo((props: ISideBarItemProps) => {
    const { item, collapsed } = props
    const { t } = useTranslation()

    return (
        <AppLink
            className={classNames(cls.itemLink, { [cls.collapsed]: collapsed })}
            theme={AppLinkTheme.INVERTED}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.langKey)}
            </span>
        </AppLink>
    )
})
