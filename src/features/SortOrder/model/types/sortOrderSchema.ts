import { SortOrder, SortBy } from '@entities/Product'

export interface sortOrderSchema {
  sortBy?: SortBy
  order?: SortOrder
}
