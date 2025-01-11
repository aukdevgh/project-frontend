import { FC } from 'react'
import { useLocation, useParams } from 'react-router'

import { useGetProductById } from '@entities/Product'

import { classNames } from '@shared/lib/classNames'
import { formatPathName } from '@shared/lib/path'
import { Icon } from '@shared/ui/Icon'
import { AppLink } from '@shared/ui/Link'

import cls from './Breadcrumbs.module.scss'

interface BreadcrumbsProps {
  className?: string
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ className }) => {
  const location = useLocation()
  const pathNames = location.pathname.split('/').filter(Boolean)
  const { productId } = useParams()

  const { data: product } = useGetProductById(productId)

  const renderBreadcrumbItem = (pathname: string, index: number) => {
    const href = `/${pathNames.slice(0, index + 1).join('/')}`
    const isLastPath = pathNames.length === index + 1

    const mainPathname = pathNames[0]
    const content = productId && isLastPath ? product?.brand || product?.title : formatPathName(mainPathname, pathname)

    if (isLastPath) {
      return <li key={href}>{content}</li>
    }

    return (
      <li className={cls.item} key={href}>
        <AppLink to={href}>{content}</AppLink>
        {!isLastPath && <Icon type="ArrowRight" />}
      </li>
    )
  }

  return (
    <nav className={classNames(cls.breadcrumb, {}, [className])}>
      <ul className={cls.list}>
        <li className={cls.item}>
          <AppLink to="/">Home</AppLink>
          {pathNames.length > 0 && <Icon type="ArrowRight" />}
        </li>
        {pathNames.map(renderBreadcrumbItem)}
      </ul>
    </nav>
  )
}
