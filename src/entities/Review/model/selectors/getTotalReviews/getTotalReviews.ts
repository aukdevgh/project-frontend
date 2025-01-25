import { buildSelector } from '@shared/hooks/store'

export const [useGetTotalReviews, getTotalReviews] = buildSelector((state) => state.reviews.total)
