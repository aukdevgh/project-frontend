import { FC } from 'react'

import { useGetIsAuth } from '@features/Auth'
import { Cart } from '@features/Cart'

import { Container } from '@shared/ui'

const CartPage: FC = () => {
  const isAuth = useGetIsAuth()
  return (
    <Container>
      <Cart isAuth={isAuth} />
    </Container>
  )
}

export default CartPage
