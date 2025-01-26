import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { classNames } from '@shared/lib/classNames'
import { Pagination } from '@shared/ui'

import cls from './ProductList.module.scss'
import { useLazyGetProductsQuery } from '../../hooks'
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
  order = 'desc',
  minPrice,
  maxPrice,
  colors,
  sizes,
}) => {
  const [page, setPage] = useState(1)
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const limit = isMobile ? 6 : 9
  const [getProducts, { data, isFetching }] = useLazyGetProductsQuery()

  const handlePageChange = useCallback((page: number) => {
    setPage(page)
  }, [])

  const skeletons = useMemo(
    () =>
      Array.from({ length: limit }).map((_, index) => (
        <li key={index}>
          <ProductCardSkeleton />
        </li>
      )),
    [limit]
  )

  useEffect(() => {
    if (sortBy) {
      setPage(1)
      getProducts({
        category,
        limit,
        page,
        sortBy,
        filterByBrand,
        order,
        minPrice,
        maxPrice,
        colors,
        sizes,
      })
      window.scrollTo(0, 0)
    }
  }, [category, limit, page, sortBy, filterByBrand, order, minPrice, maxPrice, colors, sizes, getProducts])

  return (
    <>
      <ul className={classNames(cls.list, {}, [className])}>
        {isFetching ? (
          skeletons
        ) : data?.products.length ? (
          data.products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))
        ) : (
          <li>Not found</li>
        )}
      </ul>

      <Pagination
        currentPage={page}
        onPageChange={handlePageChange}
        totalItems={data?.total || 0}
        itemsPerPage={limit}
      />
    </>
  )
}
