import { buildSelector } from '@shared/hooks/store'

export const [useGetSortOrder, getSortOrder] = buildSelector((state) => state.sortOrder)
