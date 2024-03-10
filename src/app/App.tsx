import { classNames } from 'shared/lib'
import { useTheme } from 'app/providers/ThemeProvider'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'
import { Suspense } from 'react'
import { AppRouter } from './providers/Router'
import { BugButton } from './providers/ErrorBoundary'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback="">
        <NavBar />
        <BugButton />
        <div className="main-content">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
