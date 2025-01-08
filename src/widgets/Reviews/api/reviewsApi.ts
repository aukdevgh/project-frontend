import { Review } from '@entities/Product'

import { baseApi } from '@shared/api'

interface ReaviewsResponse {
  reviews: Review[]
  total: number
  hasMore: boolean
}

interface ReaviewsRequestArg {
  limit?: number
  offset?: number
}

export const reviewsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getHighRatingReviews: build.query<ReaviewsResponse, ReaviewsRequestArg>({
      query: ({ limit, offset }) => {
        const params = new URLSearchParams()

        if (limit) params.append('limit', limit.toString())
        if (offset) params.append('offset', offset.toString())

        return `products/reviews?${params.toString()}`
      },
    }),
  }),
})
