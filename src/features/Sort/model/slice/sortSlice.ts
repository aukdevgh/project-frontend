import { PayloadAction } from '@reduxjs/toolkit'

import { buildSlice } from '@shared/hooks/store'

import { sortSchema } from '../types/sortSchema'

const initialState: sortSchema = {}

const sortSlice = buildSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<sortSchema>) {
      state.sortBy = action.payload.sortBy
      state.sortDirection = action.payload.sortDirection
    },
  },
})

export const { actions: sortActions, reducer: sortReducer, useActions: useSortActions } = sortSlice
