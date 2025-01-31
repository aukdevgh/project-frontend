import { createBrowserRouter } from 'react-router'

import { BaseLayout, WithBreadcrumbLayout } from '@app/layouts'

import { Auth } from '@pages/Auth'
import { CartPage } from '@pages/CartPage'
import { Category } from '@pages/Category'
import { Checkout } from '@pages/Checkout'
import { Home } from '@pages/Home'
import { ProductPage } from '@pages/ProductPage'
import { Profile } from '@pages/Profile'

import { ProtectedRoute } from '../ui/ProtectedRoute/ProtectedRoute'

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
          path: ':catalog',
          element: <Category />,
          children: [
            {
              path: ':category',
              element: <Category />,
            },
            {
              path: ':category/:subcategory',
              element: <Category />,
            },
          ],
        },
        {
          path: ':catalog/:category/:subcategory/:productId',
          element: <ProductPage />,
        },
        {
          path: 'cart',
          element: <CartPage />,
        },
        {
          path: 'profile',
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: 'checkout',
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: 'auth',
          element: <Auth />,
        },
      ],
    },
  ])
}
