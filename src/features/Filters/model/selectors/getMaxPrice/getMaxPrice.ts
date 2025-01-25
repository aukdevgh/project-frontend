import { buildSelector } from '@shared/hooks/store'

export const [useGetMaxPrice, getMaxPrice] = buildSelector((state) => state.filters.maxPrice)
