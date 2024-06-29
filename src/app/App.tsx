import { classNames } from 'shared/lib'
import { useTheme } from 'app/providers/ThemeProvider'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'
import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userAction } from 'entities/User'
import { AppRouter } from './providers/Router'

export const App = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userAction.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="main-content">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
