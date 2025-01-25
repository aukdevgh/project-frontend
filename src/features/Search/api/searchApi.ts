import { baseApi } from '@shared/api'

import { SearchRequestArgs, SearchResponseType } from '../types/searchTypes'

export const searchApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProductsBySearch: build.query<SearchResponseType, SearchRequestArgs>({
      query: ({ searchQuery }) => ({
        url: `products/search?q=${searchQuery}&select=id,name,price,discountPercentage,rating,images,category`,
      }),
    }),
  }),
})

export const { useLazyGetProductsBySearchQuery } = searchApi
