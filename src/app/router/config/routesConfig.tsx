import { createBrowserRouter } from 'react-router'

import { BaseLayout, WithBreadcrumbLayout } from '@app/layouts'

import { MainPage } from '@pages/MainPage'
import { ProductPage } from '@pages/ProductPage'
import { ProductsPage } from '@pages/ProductsPage'

import { getRouteMain, getRouteProductById, getRouteProducts } from '@shared/lib/routes'

export const routeConfig = () => {
  return createBrowserRouter([
    {
      element: <BaseLayout />,
      errorElement: <div>Error happened</div>,
      children: [
        {
          path: getRouteMain(),
          element: <MainPage />,
        },
      ],
    },
    {
      element: <WithBreadcrumbLayout />,
      errorElement: <div>Error happened</div>,
      children: [
        {
          path: getRouteProducts(),
          element: <ProductsPage />,
        },
        {
          path: getRouteProductById(':id'),
          element: <ProductPage />,
        },
      ],
    },
  ])
}
