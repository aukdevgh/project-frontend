import { FC } from 'react'

import { OrderForm } from '@features/Order'

import { Container } from '@shared/ui'

import cls from './Checkout.module.scss'

const Checkout: FC = () => {
  return (
    <Container className={cls.checkout}>
      <OrderForm />
    </Container>
  )
}

export default Checkout
