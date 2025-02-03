import { FC } from 'react'

import { useGetCartItems } from '@features/Cart'
import { OrderForm, useOrderActions } from '@features/Order'

import { Container } from '@shared/ui'

import cls from './Checkout.module.scss'

const Checkout: FC = () => {
  const cartItems = useGetCartItems()
  const { setHasLoadedOrders } = useOrderActions()

  return (
    <Container className={cls.checkout}>
      <OrderForm cartItems={cartItems} handleSetHasLoadedOrders={setHasLoadedOrders} />
    </Container>
  )
}

export default Checkout
