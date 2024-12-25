import { baseApi } from '@shared/api'

import { makeStore } from '../config/configStore'

export interface StateSchema {
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>
}

export type AppDispatch = ReturnType<typeof makeStore>['dispatch']
