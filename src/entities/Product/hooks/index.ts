import { useEffect } from 'react'

import { productsApi } from '@entities/Product/api/ProductApi'

export const { useLazyGetProductByIdQuery, useGetProductByIdQuery, useGetProductsQuery, useLazyGetProductsQuery } =
  productsApi

export const useGetProductById = (id: string | undefined) => {
  const [getProductById, { data, isFetching }] = useLazyGetProductByIdQuery()

  useEffect(() => {
    if (id) {
      getProductById(id)
    }
  }, [id, getProductById])

  return { data, isFetching }
}
