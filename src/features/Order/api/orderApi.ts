import { baseApi } from '@shared/api'

import { type Order } from '../model/types/orderSchema'

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (orderData) => ({
        url: '/checkout',
        method: 'POST',
        body: orderData,
      }),
    }),
    getOrders: build.query<Order[], void>({
      query: () => ({
        url: 'orders',
      }),
    }),
  }),
})

export const { useCreateOrderMutation, useLazyGetOrdersQuery } = orderApi
