import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { baseApi } from '@shared/api'

export function makeStore() {
  const rootReducers = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
  })

  const store = configureStore({
    reducer: rootReducers,
    devTools: import.meta.env.DEV,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(baseApi.middleware),
  })

  return store
}
