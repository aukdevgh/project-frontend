import { PayloadAction } from '@reduxjs/toolkit'

import { buildSlice } from '@shared/hooks/store'

import { Order, OrderSchema } from '../types/orderSchema'

const initialState: OrderSchema = {
  orders: [],
  hasLoaded: false,
}
const orderSlice = buildSlice({
  name: 'order',
  initialState,
  reducers: {
    setHasLoadedOrders: (state, action: PayloadAction<boolean>) => {
      state.hasLoaded = action.payload
    },
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload
      state.hasLoaded = true
    },
  },
})

export const { actions: orderActions, reducer: orderReducer, useActions: useOrderActions } = orderSlice
