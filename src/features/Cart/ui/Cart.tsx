import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Headling } from '@shared/ui'

import cls from './Cart.module.scss'
import { CartList } from './CartList/CartList'
import { OrderSummary } from './OrderSummary/OrderSummary'
import { useGetCartItems } from '../model/selectors/getCartItems/getCartItems'

interface CartProps {
  className?: string
}

export const Cart: FC<CartProps> = ({ className }) => {
  const cartItems = useGetCartItems()
  return (
    <div className={classNames(cls.cart, {}, [className])}>
      <Headling as="h2">Shopping Cart</Headling>

      <div className={cls.content}>
        <CartList items={cartItems} />
        <OrderSummary items={cartItems} />
      </div>
    </div>
  )
}
