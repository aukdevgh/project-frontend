import { CartItem } from '../model/types/cartSchema'

export const compareItems = (item: CartItem, comparedItem: CartItem): boolean => {
  return item.id === comparedItem.id && item.size === comparedItem.size && item.color === comparedItem.color
}
