import { AboutPage } from "pages/aboutPage"
import { MainPage } from "pages/mainPage"
import { RouteProps } from "react-router-dom"


export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
}

export const routerConfig: Array<RouteProps> = [
  {
    path: RoutePaths[AppRoutes.MAIN],
    element: <MainPage />
  },
  {
    path: RoutePaths[AppRoutes.ABOUT],
    element: <AboutPage />
  }
]