import { PayloadAction } from '@reduxjs/toolkit'

import { buildSlice } from '@shared/hooks/store'

import { sortOrderSchema } from '../types/sortOrderSchema'

const initialState: sortOrderSchema = {}

const sortOrderSlice = buildSlice({
  name: 'sortOrder',
  initialState,
  reducers: {
    setSortOrder(state, action: PayloadAction<sortOrderSchema>) {
      state.sortBy = action.payload.sortBy
      state.order = action.payload.order
    },
  },
})

export const { actions: sortOrderActions, reducer: sortOrderReducer, useActions: useSortOrderActions } = sortOrderSlice
