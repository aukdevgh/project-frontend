import { buildSelector } from '@shared/hooks/store'

export const [useGetReviewsPage, getReviewsPage] = buildSelector((state) => state.reviews.page)
