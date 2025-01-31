import { FC, useMemo } from 'react'
import { useNavigate } from 'react-router'

import { getDiscountPrice, toUSD } from '@shared/lib/format'
import { Button, Card, Headling, Icon, Text } from '@shared/ui'

import cls from './OrderSummary.module.scss'
import { type CartItem } from '../../model/types/cartSchema'

interface OrderSummaryProps {
  items: CartItem[]
}

const DELIVERY_FEE = 15

export const OrderSummary: FC<OrderSummaryProps> = ({ items }) => {
  const navigate = useNavigate()
  const { subtotal, discount, total, deliveryFee } = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const discount = items.reduce(
      (sum, item) => sum + (item.price - getDiscountPrice(item.price, item.discountPercentage)) * item.quantity,
      0
    )

    const total = subtotal ? subtotal - discount + DELIVERY_FEE : 0

    return {
      subtotal: Number(subtotal.toFixed(2)),
      discount: Number(discount.toFixed(2)),
      total: Number(total.toFixed(2)),
      deliveryFee: subtotal ? DELIVERY_FEE : 0,
    }
  }, [items])

  return (
    <Card className={cls['order-summary']}>
      <Headling as="h2">Order Summary</Headling>
      <div className={cls['text-row']}>
        <Text size="l">Subtotal</Text>
        <Text weight="bold" size="l">
          {toUSD(subtotal)}
        </Text>
      </div>
      <div className={cls['text-row']}>
        <Text size="l">Discount</Text>
        <Text className={cls.discount} weight="bold" size="l">
          -{toUSD(discount)}
        </Text>
      </div>
      <div className={cls['text-row']}>
        <Text size="l">Delivery Fee</Text>
        <Text weight="bold" size="l">
          {toUSD(deliveryFee)}
        </Text>
      </div>
      <div className={cls['text-row']}>
        <Text size="l">Total</Text>
        <Text weight="bold" size="xl">
          {toUSD(total)}
        </Text>
      </div>

      <Button className={cls.checkout} onClick={() => navigate('/checkout')} disabled={items.length === 0}>
        Go to Checkout <Icon type="ArrowLeft" width={24} height={24} />
      </Button>
    </Card>
  )
}
