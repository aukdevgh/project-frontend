import { FC, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router'

import { classNames } from '@shared/lib/classNames'

import cls from './AppLink.module.scss'

type AppLinkVariant = 'underline' | 'clear' | 'outline'

interface AppLinkProps extends LinkProps {
  className?: string
  variant?: AppLinkVariant
  children: ReactNode
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, to = '/', variant = 'underline', children, ...otherProps } = props
  return (
    <Link to={to} className={classNames(cls.link, {}, [className, cls[variant]])} {...otherProps}>
      {children}
    </Link>
  )
}
