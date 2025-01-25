import { buildSelector } from '@shared/hooks/store'

export const [useGetSizes, getSizes] = buildSelector((state) => state.filters.sizes)
