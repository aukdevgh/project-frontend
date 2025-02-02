import { FC } from 'react'

import { useCartSync } from '@features/Cart/hooks/useCartSync'

import { Card, Line, Text } from '@shared/ui'

import cls from './CartList.module.scss'
import { type CartItem as CartItemType } from '../../model/types/cartSchema'
import { CartItem } from '../CartItem/CartItem'

interface CartListProps {
  items: CartItemType[]
}

export const CartList: FC<CartListProps> = ({ items }) => {
  const { updateCart, removeFromCart } = useCartSync()

  const increaseQuantity = (item: CartItemType) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 }
    updateCart(updatedItem)
  }

  const decreaseQuantity = (item: CartItemType) => {
    if (item.quantity <= 1) return

    const updatedItem = { ...item, quantity: item.quantity - 1 }

    updateCart(updatedItem)
  }

  return (
    <Card className={cls.items}>
      {items.length === 0 ? (
        <Text as="p">Cart is empty</Text>
      ) : (
        <ul className={cls.list}>
          {items.map((item: CartItemType) => (
            <li className={cls.item} key={`${item.id}-${item.color}-${item.size}`}>
              <CartItem
                item={item}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                removeItem={removeFromCart}
              />
              <Line className={cls.line} />
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}
