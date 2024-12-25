import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router'

import { classNames } from '@shared/lib/classNames'

interface LayoutProps {
  className?: string
  topbar?: ReactNode
  header?: ReactNode
  breadcrumb?: ReactNode
  footer?: ReactNode
}

export const Layout: FC<LayoutProps> = ({ className, topbar, header, breadcrumb, footer }) => {
  return (
    <div className={classNames('app', {}, [className])}>
      {topbar}
      {header}
      {breadcrumb}
      <div className="main container">
        <Outlet />
      </div>
      {footer}
    </div>
  )
}
