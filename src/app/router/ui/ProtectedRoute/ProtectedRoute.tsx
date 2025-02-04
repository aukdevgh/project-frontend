import { FC, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router'

import { useGetIsAuth } from '@features/Auth'

import { getRouteAuth } from '@shared/lib/routes'

interface ProtectedRouteProps {
  children: ReactNode
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuth = useGetIsAuth()
  const location = useLocation()
  if (!isAuth) {
    return <Navigate to={getRouteAuth()} state={{ from: location.pathname }} />
  }
  return children
}
