import { baseApi } from '@shared/api'

import { ReaviewRequestArg, ReaviewResponse } from '../types'

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
    getReviewsByProductId: build.query<ReaviewResponse, ReaviewRequestArg>({
      query: ({ limit, offset, productId }) => {
        const params = new URLSearchParams()

        if (productId) params.append('productId', productId)
        if (limit) params.append('limit', limit.toString())
        if (offset) params.append('offset', offset.toString())

        return `products/reviews?${params.toString()}`
      },
    }),
  }),
})
