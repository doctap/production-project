import { classNames } from 'shared/lib'
import { memo, useState } from 'react'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { SideBarItemList } from '../../model/item'
import { SideBarItem } from '../SideBarItem/SideBarItem'
import cls from './SideBar.module.scss'

interface ISideBarProps {
    className?: string
}

export const SideBar = memo(({ className = '' }: ISideBarProps) => {
    const isAuth = useSelector(getUserAuthData)
    const [collapsed, setCollapsed] = useState(true)

    const toggle = () => {
        setCollapsed(!collapsed)
    }

    const itemList = SideBarItemList.filter(item => !item.authOnly || isAuth).map(item => (
        <SideBarItem collapsed={collapsed} key={item.path} item={item} />
    ))

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                {itemList}
            </div>
            <Button
                className={cls.sidebarToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid="sidebar-toggle"
                onClick={toggle}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.swithers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.langSwitcher} />
            </div>
        </div>
    )
})
