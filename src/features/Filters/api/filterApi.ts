import { baseApi } from '@shared/api'

export interface PriceRangeResponseData {
  min: number
  max: number
}

export const filterApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPriceRange: build.query<PriceRangeResponseData, void>({
      query: () => ({
        url: `products/price-limits`,
      }),
    }),
    getColors: build.query<string[], void>({
      query: () => ({
        url: `products/colors`,
      }),
    }),
    getSizes: build.query<string[], void>({
      query: () => ({
        url: `products/sizes`,
      }),
    }),
    getCategoryList: build.query<string[], string | undefined>({
      query: (category) => {
        const params = new URLSearchParams()

        if (category) params.append('category', category)

        return `products/category-list?${params.toString()}`
      },
      transformResponse: (response: string[]) => response,
    }),
  }),
})
