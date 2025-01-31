import { PayloadAction } from '@reduxjs/toolkit'

import { buildSlice } from '@shared/hooks/store'

import { compareItems } from '../../lib/compareItems'
import { CartItem, CartSchema } from '../types/cartSchema'

const initialState: CartSchema = {
  items: [],
}

const cartSlice = buildSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => compareItems(item, action.payload))
      if (existingItem) {
        existingItem.quantity = action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
    },
    updateItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => compareItems(item, action.payload))
      if (existingItem) {
        existingItem.quantity = action.payload.quantity
      }
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter((item) => !compareItems(item, action.payload))
    },
  },
})

export const { actions: cartActions, reducer: cartReducer, useActions: useCartActions } = cartSlice
