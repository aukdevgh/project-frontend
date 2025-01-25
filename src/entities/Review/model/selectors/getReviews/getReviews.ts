import { buildSelector } from '@shared/hooks/store'

export const [useGetReviews, getReviews] = buildSelector((state) => state.reviews.reviews)
