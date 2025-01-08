import { createBrowserRouter } from 'react-router'

import { BaseLayout, WithBreadcrumbLayout } from '@app/layouts'

import { Brands } from '@pages/Brands'
import { Cart } from '@pages/Cart'
import { Category } from '@pages/Category'
import { Home } from '@pages/Home'
import { Login } from '@pages/Login'
import { Product } from '@pages/Product'
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
          handle: { breadcrumb: 'Category' },
        },
        {
          path: '/:category/:subcategory',
          element: <Category />,
          handle: { breadcrumb: 'Products' },
        },
        {
          path: '/:category/:subcategory/:productId',
          element: <Product />,
          handle: { breadcrumb: 'Product' },
        },
        {
          path: 'cart',
          element: <Cart />,
          handle: { breadcrumb: 'Cart' },
        },
        {
          path: 'profile',
          element: <Profile />,
          handle: { breadcrumb: 'Profile' },
        },
        {
          path: 'login',
          element: <Login />,
          handle: { breadcrumb: 'Login' },
        },
        {
          path: '/brands',
          element: <Brands />,
          handle: { breadcrumb: 'Brands' },
        },
      ],
    },
  ])
}
