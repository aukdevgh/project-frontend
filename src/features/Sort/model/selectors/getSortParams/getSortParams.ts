import { buildSelector } from '@shared/hooks/store'

export const [useGetSortParams, getSortParams] = buildSelector((state) => state.sort)
