import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Container } from '@shared/ui/Container'

import cls from './ProductList.module.scss'
import { useGetProductsQuery } from '../../hooks'
import { ProductsQueryArgs } from '../../types'
import { ProductCard } from '../ProductCard/ProductCard'
import { ProductCardSkeleton } from '../ProductCard/ProductCard.skeleton'

interface ProductListProps extends ProductsQueryArgs {
  className?: string
}

export const ProductList: FC<ProductListProps> = ({
  className,
  filterByBrand,
  sortBy,
  category,
  limit,
  offset,
  order = 'desc',
}) => {
  const { data, isFetching } = useGetProductsQuery({
    category,
    limit,
    offset,
    sortBy,
    filterByBrand,
    order,
  })

  if (isFetching || !data?.products?.length) {
    return (
      <Container>
        <ul className={classNames(cls.list, {}, [className])}>
          {[1, 2, 3, 4].map((product) => (
            <li key={product}>
              <ProductCardSkeleton />
            </li>
          ))}
        </ul>
      </Container>
    )
  }

  return (
    <Container>
      <ul className={classNames(cls.list, {}, [className])}>
        {data.products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Container>
  )
}
