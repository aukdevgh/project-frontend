import { useEffect } from 'react'

import { useLazyGetProductByIdQuery } from '../api/ProductApi'

export const useGetProductById = (id: string | undefined) => {
  const [getProductById, { data, isFetching }] = useLazyGetProductByIdQuery()

  useEffect(() => {
    if (id && !isFetching) {
      getProductById(id)
    }
  }, [id, getProductById])

  return { data, isFetching }
}
