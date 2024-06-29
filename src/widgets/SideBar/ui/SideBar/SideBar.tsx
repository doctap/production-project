import { classNames } from 'shared/lib'
import { useState } from 'react'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { AppLink, AppLinkTheme, Button, ButtonSize, ButtonTheme } from 'shared/ui'
import { RoutePaths } from 'shared/config'
import { useTranslation } from 'react-i18next'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import cls from './SideBar.module.scss'

interface ISideBarProps {
  className?: string
}

export const SideBar = ({ className = '' }: ISideBarProps) => {
    const [collapsed, setCollapsed] = useState(true)
    const { t } = useTranslation()

    const toggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                <AppLink
                    className={cls.itemLink}
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePaths.main}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('main-page-link')}</span>
                </AppLink>
                <AppLink
                    className={cls.itemLink}
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePaths.about}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('about-page-link')}</span>
                </AppLink>
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
}
