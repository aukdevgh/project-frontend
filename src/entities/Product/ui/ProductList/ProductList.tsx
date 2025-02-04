import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useParams } from 'react-router'

import { classNames } from '@shared/lib/classNames'
import { Pagination } from '@shared/ui'

import cls from './ProductList.module.scss'
import { useLazyGetProductsQuery } from '../../api/ProductApi'
import { ProductsQueryArgs } from '../../types/ProductSchema'
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
  sortDirection = 'desc',
  minPrice,
  maxPrice,
  colors,
  sizes,
}) => {
  const { catalog } = useParams()
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const limit = useMemo(() => (isMobile ? 6 : 9), [isMobile])

  const [getProducts, { data, isFetching }] = useLazyGetProductsQuery()
  const [page, setPage] = useState(1)

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage !== page) {
        setPage(newPage)
        window.scrollTo(0, 0)
      }
    },
    [page]
  )

  const skeletons = useMemo(
    () =>
      Array.from({ length: limit }, (_, index) => (
        <li key={index}>
          <ProductCardSkeleton />
        </li>
      )),
    [limit]
  )

  useEffect(() => {
    setPage(1)
  }, [category, sortBy, filterByBrand, sortDirection, minPrice, maxPrice, colors, sizes, catalog])

  useEffect(() => {
    getProducts({
      category,
      limit,
      page,
      sortBy,
      filterByBrand,
      sortDirection,
      minPrice,
      maxPrice,
      colors,
      sizes,
    })
  }, [page, category, limit, sortBy, filterByBrand, sortDirection, minPrice, maxPrice, colors, sizes])

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
