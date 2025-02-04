import { FC } from 'react'

import { Cart } from '@entities/Cart'

import { Container } from '@shared/ui'

const CartPage: FC = () => {
  return (
    <Container>
      <Cart />
    </Container>
  )
}

export default CartPage
