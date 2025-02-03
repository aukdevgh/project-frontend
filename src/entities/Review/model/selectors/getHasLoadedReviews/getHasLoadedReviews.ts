import { buildSelector } from '@shared/hooks/store'

export const [useGetHasLoadedReviews, getHasLoadedReviews] = buildSelector((state) => state.reviews.hasLoaded)
