import { buildSelector } from '@shared/hooks/store'

export const [useGetColors, getColors] = buildSelector((state) => state.filters.colors)
