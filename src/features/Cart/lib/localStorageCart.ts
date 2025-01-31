import { CartItem } from '../model/types/cartSchema'

export const getLocalStorageCart = () => {
  const cart = localStorage.getItem('cart')
  if (!cart) {
    return []
  }
  return JSON.parse(cart)
}

export const setItemsToLocalStorageCart = (items: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(items))
}
