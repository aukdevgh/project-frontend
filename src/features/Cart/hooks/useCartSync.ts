import { useEffect, useMemo } from 'react'

import {
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveFromCartMutation,
  useLazyGetCartQuery,
} from './apiHooks'
import { compareItems } from '../lib/compareItems'
import { getLocalStorageCart, setItemsToLocalStorageCart } from '../lib/localStorageCart'
import { useGetCartItems } from '../model/selectors/getCartItems/getCartItems'
import { useCartActions } from '../model/slice/cartSlice'
import { type CartItem } from '../model/types/cartSchema'

export const useCartSync = (isAuth: boolean) => {
  // Мемоизация isAuth
  const isAuthMemo = useMemo(() => isAuth, [isAuth])

  // Store cart
  const { setCart, addItem, updateItem, removeItem } = useCartActions()
  const cartItems = useGetCartItems()

  // Server cart
  const [getServerCartItems, { data: serverCart, isFetching }] = useLazyGetCartQuery()
  const [addToCartMutation] = useAddToCartMutation()
  const [updateCartItemMutation] = useUpdateCartItemMutation()
  const [removeFromCartMutation] = useRemoveFromCartMutation()

  // Загрузка корзины из localStorage при неавторизованном состоянии
  useEffect(() => {
    if (!isAuthMemo) {
      setCart(getLocalStorageCart())
    }
  }, [isAuthMemo, setCart])

  // Запрос корзины с сервера при авторизации
  useEffect(() => {
    if (isAuthMemo && !isFetching && serverCart === undefined) {
      getServerCartItems()
    }
  }, [isAuthMemo, serverCart, isFetching, getServerCartItems])

  // Обновление store после загрузки корзины с сервера
  useEffect(() => {
    if (isAuthMemo && serverCart) {
      setCart(serverCart)
    }
  }, [isAuthMemo, serverCart, setCart])

  // Сохранение корзины в localStorage при изменениях (если не авторизован)
  useEffect(() => {
    if (!isAuthMemo) {
      setItemsToLocalStorageCart(cartItems)
    }
  }, [isAuthMemo, cartItems])

  const addToCart = async (item: CartItem) => {
    addItem(item) // Оптимистичное обновление

    if (isAuthMemo) {
      try {
        await addToCartMutation({
          id: item.id,
          color: item.color,
          size: item.size,
          quantity: item.quantity,
        }).unwrap()
      } catch {
        console.log('Откат add', item)
        removeItem(item) // Откат при ошибке
      }

      getServerCartItems()
    }
  }

  const updateCart = async (item: CartItem): Promise<void> => {
    const previousItem = cartItems.find((i) => compareItems(i, item))

    updateItem(item) // Оптимистичное обновление

    if (isAuthMemo) {
      try {
        await updateCartItemMutation({
          id: item.id,
          color: item.color,
          size: item.size,
          quantity: item.quantity,
        }).unwrap()
      } catch {
        console.log('Откат update', item)
        if (previousItem) updateItem(previousItem) // Откат при ошибке
      }

      getServerCartItems()
    }
  }
  const removeFromCart = async (item: CartItem) => {
    removeItem(item) // Оптимистичное обновление

    if (isAuthMemo) {
      try {
        await removeFromCartMutation({
          id: item.id,
          color: item.color,
          size: item.size,
        }).unwrap()
      } catch {
        console.log('Откат remove', item)
        addItem(item) // Откат при ошибке
      }

      getServerCartItems()
    }
  }

  return { cartItems, addToCart, updateCart, removeFromCart }
}
