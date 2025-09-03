import { getUserAuthData } from 'entities/User'
import { Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from 'shared/config/RouterConfig/RouterConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData)
    const routes = useMemo(() => routerConfig.filter(route => !route.authOnly || isAuth), [isAuth])

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}
