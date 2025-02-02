import { baseApi } from '@shared/api'

import { Order } from '../types'

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
