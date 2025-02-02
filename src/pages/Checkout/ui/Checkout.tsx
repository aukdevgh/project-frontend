import { FC } from 'react'

import { useGetCartItems } from '@features/Cart'
import { OrderForm } from '@features/Order'

import { Container } from '@shared/ui'

import cls from './Checkout.module.scss'

const Checkout: FC = () => {
  const cartItems = useGetCartItems()
  return (
    <Container className={cls.checkout}>
      <OrderForm cartItems={cartItems} />
    </Container>
  )
}

export default Checkout
