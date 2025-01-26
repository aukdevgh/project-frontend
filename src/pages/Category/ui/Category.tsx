import { FC } from 'react'

import { Filters, useGetCategory, useGetSelectedPriceRange, useGetColors, useGetSizes } from '@features/Filters'
import { SortOrder, useGetSortOrder } from '@features/SortOrder'

import { ProductList } from '@entities/Product'

import { Container } from '@shared/ui'

import cls from './Category.module.scss'

const Category: FC = () => {
  const category = useGetCategory()
  const priceRange = useGetSelectedPriceRange()
  const sortOrder = useGetSortOrder()
  const colors = useGetColors()
  const sizes = useGetSizes()

  return (
    <Container className={cls.category}>
      <Filters />

      <div className={cls.content}>
        <SortOrder className={cls.sort} />

        <ProductList
          category={category}
          maxPrice={priceRange.max}
          minPrice={priceRange.min}
          sortBy={sortOrder.sortBy}
          order={sortOrder.order}
          colors={colors}
          sizes={sizes}
        />
      </div>
    </Container>
  )
}

export default Category
