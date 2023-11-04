import { classNames } from 'shared/lib'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/Router'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'
import { Suspense } from 'react'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback=''>
        <NavBar />
        <div className='main-content'>
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
