import { baseApi } from '@shared/api'

import { ReaviewRequestArg, ReaviewResponse, Review } from '../types'

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getHighRatingReviews: build.query<ReaviewResponse, ReaviewRequestArg>({
      query: ({ limit, offset }) => {
        const params = new URLSearchParams()

        if (limit) params.append('limit', limit.toString())
        if (offset) params.append('offset', offset.toString())

        return `products/reviews?${params.toString()}`
      },
    }),
    getReviewsByProductId: build.query<Review[], string>({
      query: (produtId) => ({
        url: `products/reviews?productId=${produtId}`,
      }),
    }),
  }),
})
