import { AuthSchema } from '@features/Auth'
import { FiltersSchema } from '@features/Filters'
import { sortSchema } from '@features/Sort'

import { CartSchema } from '@entities/Cart'
import { OrderSchema } from '@entities/Order'
import { ReviewsSchema } from '@entities/Review'

import { baseApi } from '@shared/api'

import { makeStore } from '../config/configStore'

export interface StateSchema {
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>
  filters: FiltersSchema
  sort: sortSchema
  reviews: ReviewsSchema
  auth: AuthSchema
  cart: CartSchema
  order: OrderSchema
}

export type AppDispatch = ReturnType<typeof makeStore>['dispatch']
