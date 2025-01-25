import { buildSelector } from '@shared/hooks/store'

export const [useGetHasLoaded, getHasLoaded] = buildSelector((state) => state.reviews.hasLoaded)
