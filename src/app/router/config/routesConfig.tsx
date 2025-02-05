import { createBrowserRouter, Navigate } from 'react-router'

import { BaseLayout, WithBreadcrumbLayout } from '@app/layouts'

import { Auth } from '@pages/Auth'
import { CartPage } from '@pages/CartPage'
import { Category } from '@pages/Category'
import { Checkout } from '@pages/Checkout'
import { Home } from '@pages/Home'
import { NotFoundPage } from '@pages/NotFoundPage'
import { ProductPage } from '@pages/ProductPage'
import { Profile } from '@pages/Profile'

import { ProtectedRoute } from '../ui/ProtectedRoute/ProtectedRoute'

export const routeConfig = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    element: <WithBreadcrumbLayout />,
    children: [
      {
        path: ':catalog',
        element: <Category />,
      },
      {
        path: ':catalog/:category',
        element: <Category />,
      },
      {
        path: ':catalog/:category/:subcategory',
        element: <Category />,
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
  {
    path: '/notfound',
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <Navigate to="/notfound" replace />,
  },
])
