import { buildSelector } from '@shared/hooks/store'

export const [useGetCartItems, getCartItems] = buildSelector((state) => state.cart.items)
