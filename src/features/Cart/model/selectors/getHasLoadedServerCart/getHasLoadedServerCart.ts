import { buildSelector } from '@shared/hooks/store'

export const [useGetHasLoadedServerCart, getHasLoadedServerCart] = buildSelector(
  (state) => state.cart.hasLoadedServerCart
)
