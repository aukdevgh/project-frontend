import { buildSelector } from '@shared/hooks/store'

export const [useGetMinPrice, getMinPrice] = buildSelector((state) => state.filters.minPrice)
