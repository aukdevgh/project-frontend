import { baseApi } from '@shared/api'

import { ReaviewRequestArg, ReaviewResponse } from '../model/types/reviewsSchema'

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getHighRatingReviews: build.query<ReaviewResponse, ReaviewRequestArg>({
      query: ({ limit, page }) => {
        const params = new URLSearchParams()

        if (limit) params.append('limit', limit.toString())
        if (page) params.append('page', page.toString())

        return `reviews?${params.toString()}`
      },
    }),
    getReviewsByProductId: build.query<ReaviewResponse, ReaviewRequestArg>({
      query: ({ limit, page, productId }) => {
        const params = new URLSearchParams()

        if (limit) params.append('limit', limit.toString())
        if (page) params.append('page', page.toString())

        return `reviews/${productId}?${params.toString()}`
      },
    }),
  }),
})
