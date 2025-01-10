import { createBrowserRouter } from 'react-router'

import { BaseLayout, WithBreadcrumbLayout } from '@app/layouts'

import { Brands } from '@pages/Brands'
import { Cart } from '@pages/Cart'
import { Category } from '@pages/Category'
import { Home } from '@pages/Home'
import { Login } from '@pages/Login'
import { ProductDetails } from '@pages/ProductDetails'
import { Profile } from '@pages/Profile'

export const routeConfig = () => {
  return createBrowserRouter([
    {
      element: <BaseLayout />,
      errorElement: <div>Error happened</div>,
      children: [
        {
          path: '/',
          element: <Home />,
          handle: { breadcrumb: 'Home' },
        },
      ],
    },
    {
      path: '/',
      element: <WithBreadcrumbLayout />,
      errorElement: <div>Error happened</div>,
      children: [
        {
          path: '/:category',
          element: <Category />,
        },
        {
          path: '/:category/:subcategory',
          element: <Category />,
        },
        {
          path: '/:category/:subcategory/:productId',
          element: <ProductDetails />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'profile',
          element: <Profile />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: '/brands',
          element: <Brands />,
        },
      ],
    },
  ])
}
