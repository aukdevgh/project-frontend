import { RouterProvider } from 'react-router'

import { routeConfig } from '@app/router'

export const AppRouterProvider = () => {
  return <RouterProvider router={routeConfig()} />
}
