import React from 'react'
import { RoutePaths } from 'shared/config'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-17-20.svg'

export interface ISideBarItem {
    path: string
    langKey: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SideBarItemList: ISideBarItem[] = [
    {
        path: RoutePaths.main,
        langKey: 'main-page-link',
        Icon: MainIcon,
    },
    {
        path: RoutePaths.about,
        langKey: 'about-page-link',
        Icon: AboutIcon,
    },
    {
        path: RoutePaths.profile,
        langKey: 'profile-page-link',
        Icon: ProfileIcon,
    },
]
