import { AuthSchema } from '@features/Auth'
import { CartSchema } from '@features/Cart'
import { FiltersSchema } from '@features/Filters'
import { sortOrderSchema } from '@features/SortOrder'

import { ReviewsSchema } from '@entities/Review'

import { baseApi } from '@shared/api'

import { makeStore } from '../config/configStore'

export interface StateSchema {
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>
  filters: FiltersSchema
  sortOrder: sortOrderSchema
  reviews: ReviewsSchema
  auth: AuthSchema
  cart: CartSchema
}

export type AppDispatch = ReturnType<typeof makeStore>['dispatch']
