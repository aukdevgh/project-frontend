import { cartApi } from '../api/cartApi'

export const {
  useGetCartQuery,
  useLazyGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useUpdateCartItemMutation,
} = cartApi
