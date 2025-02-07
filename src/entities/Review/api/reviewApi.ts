import { baseApi } from '@shared/api'

import { AddReviewRequest, ReaviewRequestArg, ReaviewResponse } from '../types/reviewsSchema'

const reviewApi = baseApi.injectEndpoints({
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
    addReview: build.mutation<{ message: string }, AddReviewRequest>({
      query: ({ productId, text, rating }) => ({
        url: `reviews/${productId}`,
        method: 'POST',
        body: { text, rating },
        credentials: 'include',
      }),
    }),
  }),
})

export const {
  useGetHighRatingReviewsQuery,
  useLazyGetReviewsByProductIdQuery,
  useGetReviewsByProductIdQuery,
  useAddReviewMutation,
} = reviewApi
