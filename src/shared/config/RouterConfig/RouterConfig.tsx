import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import type { RouteProps } from 'react-router-dom'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  // last
  NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    // last
    [AppRoutes.NOT_FOUND]: '*',
}

export const routerConfig: RouteProps[] = [
    {
        path: RoutePaths[AppRoutes.MAIN],
        element: <MainPage />,
    },
    {
        path: RoutePaths[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    {
        path: RoutePaths[AppRoutes.PROFILE],
        element: <ProfilePage />,
    },
    // last
    {
        path: RoutePaths[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
]
