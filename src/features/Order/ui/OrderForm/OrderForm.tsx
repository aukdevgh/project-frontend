import { FC, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'

import { type CartItem } from '@features/Cart'

import { classNames } from '@shared/lib/classNames'
import { getDiscountPrice } from '@shared/lib/format'
import { getPayments } from '@shared/lib/getPayments/getPayments'
import { Button, Card, Headling, Input, Select, Text } from '@shared/ui'

import cls from './OrderForm.module.scss'
import { useCreateOrderMutation } from '../../api/orderApi'

interface OrderProps {
  className?: string
  cartItems: CartItem[]
  handleSetHasLoadedOrders: (value: boolean) => void
}

export const OrderForm: FC<OrderProps> = ({ className, cartItems, handleSetHasLoadedOrders }) => {
  const navigate = useNavigate()
  const [createOrder, { isLoading }] = useCreateOrderMutation()
  const payments = useMemo(() => getPayments('big'), [])

  const [address, setAddress] = useState('')
  const [paymentMethod, setPaymentMethod] = useState(payments[0].value)

  const handleCheckout = async () => {
    if (!address) {
      alert('Введите адрес доставки')
      return
    }

    try {
      await createOrder({
        cartItems,
        totalPrice: cartItems.reduce(
          (acc, item) => acc + getDiscountPrice(item.price, item.discountPercentage) * item.quantity,
          0
        ),
        paymentMethod,
        shippingAddress: address,
      }).unwrap()

      alert('Заказ оформлен!')

      handleSetHasLoadedOrders(false)

      navigate('/profile')
    } catch (error) {
      console.error(error)
      handleSetHasLoadedOrders(true)
      alert('Ошибка оформления заказа')
    }
  }

  return (
    <Card className={classNames(cls.order, {}, [className])}>
      <Headling as="h2">Оформление заказа</Headling>

      <Text as="label" htmlFor="address">
        Адрес доставки:
      </Text>
      <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Введите адрес" />

      <Text as="label" htmlFor="payment">
        Способ оплаты:
      </Text>
      <Select
        className={cls.select}
        id="payment"
        value={paymentMethod}
        options={payments}
        onChange={setPaymentMethod}
      />

      <Button onClick={handleCheckout} loading={isLoading}>
        Оформить заказ
      </Button>
    </Card>
  )
}
