import { buildSelector } from '@shared/hooks/store'

export const [useGetOrders, getOrders] = buildSelector((state) => state.order.orders)
