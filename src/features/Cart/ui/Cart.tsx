import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Headling } from '@shared/ui'

import cls from './Cart.module.scss'
import { CartList } from './CartList/CartList'
import { OrderSummary } from './OrderSummary/OrderSummary'
import { useCartSync } from '../hooks/useCartSync'

interface CartProps {
  className?: string
  isAuth: boolean
}

export const Cart: FC<CartProps> = ({ className, isAuth }) => {
  const { cartItems } = useCartSync(isAuth)
  return (
    <div className={classNames(cls.cart, {}, [className])}>
      <Headling as="h2">Shopping Cart</Headling>

      <div className={cls.content}>
        <CartList items={cartItems} isAuth={isAuth} />
        <OrderSummary items={cartItems} />
      </div>
    </div>
  )
}
