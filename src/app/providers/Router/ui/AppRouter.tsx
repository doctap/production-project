import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from 'shared/config/RouterConfig/RouterConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {routerConfig.map(({ path, element }) => (
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
