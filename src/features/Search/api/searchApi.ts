import { baseApi } from '@shared/api'

import { SearchRequestArgs, SearchResponseType } from '../types/searchSchema'

export const searchApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProductsBySearch: build.query<SearchResponseType, SearchRequestArgs>({
      query: ({ searchQuery }) => ({
        url: `products/search?q=${searchQuery}&select=id,name,price,discountPercentage,rating,thumbnail,category`,
      }),
    }),
  }),
})

export const { useLazyGetProductsBySearchQuery } = searchApi
