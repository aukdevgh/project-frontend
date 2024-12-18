import { RouteProps } from 'react-router'

import { MainPage } from '@pages/MainPage'
import { ProductPage } from '@pages/ProductPage'
import { ProductsPage } from '@pages/ProductsPage'

import { getRouteMain, getRouteProductById, getRouteProducts } from '@shared/lib/routes'

import { AppRoutes } from '../consts/AppRoutes'

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.PRODUCTS]: {
    path: getRouteProducts(),
    element: <ProductsPage />,
  },
  [AppRoutes.PRODUCT]: {
    path: getRouteProductById(':id'),
    element: <ProductPage />,
  },
}
