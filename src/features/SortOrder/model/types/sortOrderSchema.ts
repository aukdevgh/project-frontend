import { Order, SortBy } from '@entities/Product'

export interface sortOrderSchema {
  sortBy?: SortBy
  order?: Order
}
