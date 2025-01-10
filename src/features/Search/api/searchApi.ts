import { baseApi } from '@shared/api'

import { SearchRequestArgs, SearchResponseType } from '../types/searchTypes'

export const searchApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProductsBySearch: build.query<SearchResponseType, SearchRequestArgs>({
      query: ({ searchQuery }) => ({
        url: `products/search?q=${searchQuery}&select=id,title,price,discountPercentage,rating,thumbnail`,
      }),
    }),
  }),
})

export const { useLazyGetProductsBySearchQuery } = searchApi
