import { FC, ReactNode, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'

import { classNames } from '@shared/lib/classNames'

interface LayoutProps {
  className?: string
  topbar?: ReactNode
  header?: ReactNode
  breadcrumb?: ReactNode
  footer?: ReactNode
}

export const Layout: FC<LayoutProps> = ({ className, topbar, header, breadcrumb, footer }) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className={classNames('app', {}, [className])}>
      {topbar}
      {header}
      {breadcrumb}

      <main className="main">
        <Outlet />
      </main>

      {footer}
    </div>
  )
}
