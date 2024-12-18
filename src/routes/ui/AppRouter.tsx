import { Suspense, useCallback } from 'react'
import { Route, RouteProps, Routes } from 'react-router'

import { routeConfig } from '../config/routesConfig'

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    return <Route key={route.path} path={route.path} element={route.element} />
  }, [])

  return (
    <Suspense>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  )
}
