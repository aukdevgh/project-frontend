import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { filtersReducer } from '@features/Filters'
import { sortOrderReducer } from '@features/SortOrder'

import { reviewsReducer } from '@entities/Review'

import { baseApi } from '@shared/api'

export function makeStore() {
  const rootReducers = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    filters: filtersReducer,
    sortOrder: sortOrderReducer,
    reviews: reviewsReducer,
  })

  const store = configureStore({
    reducer: rootReducers,
    devTools: import.meta.env.DEV,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(baseApi.middleware),
  })

  return store
}
