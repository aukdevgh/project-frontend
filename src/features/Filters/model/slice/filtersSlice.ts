import { PayloadAction } from '@reduxjs/toolkit'

import { MAX_PRICE, MIN_PRICE } from '@shared/constants/price'
import { buildSlice } from '@shared/hooks/store'

import { FiltersSchema } from '../types/filtersSchema'

const initialState: FiltersSchema = {
  minPrice: MIN_PRICE,
  maxPrice: MAX_PRICE,
  selectedRange: { min: MIN_PRICE, max: MAX_PRICE },
  category: undefined,
}

const filtersSlice = buildSlice({
  name: 'filters',
  initialState,
  reducers: {
    setRange(state, action: PayloadAction<{ min: number; max: number }>) {
      state.selectedRange = { ...state.selectedRange, ...action.payload }
    },
    setLimits(state, action: PayloadAction<{ min: number; max: number }>) {
      state.minPrice = action.payload.min
      state.maxPrice = action.payload.max
      state.selectedRange = { min: action.payload.min, max: action.payload.max }
    },
    setCategory(state, action: PayloadAction<string | undefined>) {
      state.category = action.payload
    },
    setSizes(state, action: PayloadAction<string[] | undefined>) {
      state.sizes = action.payload
    },
    setColors(state, action: PayloadAction<string[] | undefined>) {
      state.colors = action.payload
    },

    resetFilters(state) {
      state.selectedRange = { min: state.minPrice, max: state.maxPrice }
      state.category = undefined
      state.sizes = undefined
      state.colors = undefined
    },
  },
})

export const { actions: filtersActions, reducer: filtersReducer, useActions: useFiltersActions } = filtersSlice
