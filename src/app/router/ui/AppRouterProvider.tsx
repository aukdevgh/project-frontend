import { RouterProvider } from 'react-router'

import { routeConfig } from '../config/routesConfig'

export const AppRouterProvider = () => {
  return <RouterProvider router={routeConfig()} />
}
