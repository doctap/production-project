import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
}

export const routerConfig: RouteProps[] = [
  {
    path: RoutePaths[AppRoutes.MAIN],
    element: <MainPage />
  },
  {
    path: RoutePaths[AppRoutes.ABOUT],
    element: <AboutPage />
  }
]
