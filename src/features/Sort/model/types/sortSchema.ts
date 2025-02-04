import type { SortDirection, SortBy } from '@entities/Product'

export interface sortSchema {
  sortBy?: SortBy
  sortDirection?: SortDirection
}
