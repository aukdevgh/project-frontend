import { buildSelector } from '@shared/hooks/store'

export const [useGetHasLoadedOrders, getHasLoadedOrders] = buildSelector((state) => state.order.hasLoaded)
