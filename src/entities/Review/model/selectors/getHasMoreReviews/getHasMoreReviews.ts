import { buildSelector } from '@shared/hooks/store'

export const [useGetHasMoreReviews, getHasMoreReviews] = buildSelector((state) => state.reviews.hasMore)
