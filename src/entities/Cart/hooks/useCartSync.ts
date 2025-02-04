import { useEffect } from 'react'

import { useGetIsAuth } from '@features/Auth'

import {
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveFromCartMutation,
  useLazyGetCartQuery,
} from '../api/cartApi'
import { compareItems } from '../lib/compareItems'
import { getLocalStorageCart, setItemsToLocalStorageCart } from '../lib/localStorageCart'
import { useGetCartItems } from '../model/selectors/getCartItems/getCartItems'
import { useGetHasLoadedServerCart } from '../model/selectors/getHasLoadedServerCart/getHasLoadedServerCart'
import { useCartActions } from '../model/slice/cartSlice'
import { type CartItem } from '../model/types/cartSchema'

export const useCartSync = () => {
  const isAuth = useGetIsAuth()
  // Store cart
  const { setCart, setHasLoadedServerCart, addItem, updateItem, removeItem } = useCartActions()
  const cartItems = useGetCartItems()
  const hasLoadedServerCart = useGetHasLoadedServerCart()

  // Server cart
  const [getServerCartItems] = useLazyGetCartQuery()
  const [addToCartMutation] = useAddToCartMutation()
  const [updateCartItemMutation] = useUpdateCartItemMutation()
  const [removeFromCartMutation] = useRemoveFromCartMutation()

  // Загрузка корзины из localStorage при неавторизованном состоянии
  useEffect(() => {
    if (!isAuth) {
      setCart(getLocalStorageCart())
    }
  }, [isAuth, setCart])

  // Запрос корзины с сервера при авторизации
  useEffect(() => {
    if (isAuth && !hasLoadedServerCart) {
      console.log('new is auth', hasLoadedServerCart)
      getServerCartItems()
        .unwrap()
        .then((data) => {
          setCart(data)
          setHasLoadedServerCart(true)
        }) // Обновление store после загрузки корзины с сервера
    }
  }, [isAuth])

  // Сохранение корзины в localStorage при изменениях (если не авторизован)
  useEffect(() => {
    if (!isAuth) {
      setItemsToLocalStorageCart(cartItems)
    }
  }, [isAuth, cartItems])

  const addToCart = async (item: CartItem) => {
    addItem(item) // Оптимистичное обновление

    if (isAuth) {
      try {
        await addToCartMutation({
          id: item.id,
          color: item.color,
          size: item.size,
          quantity: item.quantity,
        }).unwrap()
      } catch {
        removeItem(item) // Откат при ошибке
      }
    }
  }

  const updateCart = async (item: CartItem): Promise<void> => {
    const previousItem = cartItems.find((i) => compareItems(i, item))

    updateItem(item) // Оптимистичное обновление

    if (isAuth) {
      try {
        await updateCartItemMutation({
          id: item.id,
          color: item.color,
          size: item.size,
          quantity: item.quantity,
        }).unwrap()
      } catch {
        if (previousItem) updateItem(previousItem) // Откат при ошибке
      }
    }
  }
  const removeFromCart = async (item: CartItem) => {
    removeItem(item) // Оптимистичное обновление

    if (isAuth) {
      try {
        await removeFromCartMutation({
          id: item.id,
          color: item.color,
          size: item.size,
        }).unwrap()
      } catch {
        addItem(item) // Откат при ошибке
      }
    }
  }

  return { cartItems, addToCart, updateCart, removeFromCart }
}
