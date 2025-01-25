import { FC, ReactNode } from 'react'

import { SortBy, useGetProductsQuery } from '@entities/Product'

import { classNames } from '@shared/lib/classNames'
import { Headling } from '@shared/ui/Headling'

import cls from './Showcase.module.scss'
import { ShowcaseProducts } from './ShowcaseProducts/ShowcaseProducts'

interface ShowcaseProps {
  className?: string
  title: string
  sortBy: SortBy
  limit: number
  children?: ReactNode
}

export const Showcase: FC<ShowcaseProps> = ({ className, title, sortBy, limit, children }) => {
  const { data, isFetching } = useGetProductsQuery({
    limit,
    sortBy: sortBy,
    order: 'desc',
  })

  return (
    <div className={classNames(cls.showcase, {}, [className])}>
      <Headling className={cls.title} size="title-large" align="center">
        {title}
      </Headling>

      <div className={cls.content}>
        <ShowcaseProducts className={cls.list} products={data?.products} isFetching={isFetching} />
        {children}
      </div>
    </div>
  )
}
