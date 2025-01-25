import { buildSelector } from '@shared/hooks/store'

export const [useGetCategory, getCategory] = buildSelector((state) => state.filters.category)
