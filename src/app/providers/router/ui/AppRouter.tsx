import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from 'shared/config/RouterConfig/RouterConfig'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routerConfig.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <div className='page-wrapper'>
                {element}
              </div>
            }
          />
        ))}
      </Routes>
    </Suspense>
  )
}
