import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { authReducer } from '@features/Auth'
import { filtersReducer } from '@features/Filters'
import { sortReducer } from '@features/Sort'

import { cartReducer } from '@entities/Cart'
import { orderReducer } from '@entities/Order'

import { baseApi } from '@shared/api'

export function makeStore() {
  const rootReducers = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    filters: filtersReducer,
    sort: sortReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
  })

  const store = configureStore({
    reducer: rootReducers,
    devTools: import.meta.env.DEV,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(baseApi.middleware),
  })

  return store
}
