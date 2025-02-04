import { baseApi } from '@shared/api'

import { CartItem, RequestArgs } from '../model/types/cartSchema'

const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCart: build.query<CartItem[], void>({
      query: () => '/cart',
    }),
    addToCart: build.mutation<void, RequestArgs>({
      query: (item) => ({
        url: '/cart',
        method: 'POST',
        body: item,
      }),
    }),
    removeFromCart: build.mutation<void, Omit<RequestArgs, 'quantity'>>({
      query: (item) => ({
        url: '/cart',
        method: 'DELETE',
        body: item,
      }),
    }),
    updateCartItem: build.mutation<void, RequestArgs>({
      query: (item) => ({
        url: '/cart',
        method: 'PATCH',
        body: item,
      }),
    }),
    clearCart: build.mutation<void, void>({
      query: () => ({
        url: '/cart/clear',
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetCartQuery,
  useLazyGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useUpdateCartItemMutation,
} = cartApi
