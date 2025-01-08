import { useEffect } from 'react'

import { productsApi } from '@entities/Product/api/ProductApi'

export const {
  useLazyGetProductByIdQuery,
  useGetProductByIdQuery,
  useGetCategoryListQuery,
  useGetProductsQuery,
  useGetBrandListQuery,
} = productsApi

export const useGetProductById = (id: string | undefined) => {
  const [getProductById, { data }] = useLazyGetProductByIdQuery()

  useEffect(() => {
    if (id) {
      getProductById(Number(id))
    }
  }, [id, getProductById])

  return data
}
