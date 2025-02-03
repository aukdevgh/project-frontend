import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Card, Headling, Text } from '@shared/ui'

import cls from './OrderCard.module.scss'
import { type Order } from '../../model/types/orderSchema'
import { OrderItem } from '../OrderItem/OrderItem'

interface OrderCardProps {
  className?: string
  order: Order
}

export const OrderCard: FC<OrderCardProps> = ({ className, order }) => {
  return (
    <div className={classNames(cls['order-card'], {}, [className])}>
      <Headling as="h2" transform="capitalize">
        Order Items
      </Headling>

      <div className={cls.content}>
        <ul className={cls.items}>
          {order.cartItems && order.cartItems.map((item) => <OrderItem key={item.id} item={item} />)}
        </ul>

        <Card className={cls.info}>
          <Text as="p">
            <Text weight="bold">Shipping Address:</Text> {order.shippingAddress}
          </Text>
          <Text as="p">
            <Text weight="bold">Payment Method:</Text> {order.paymentMethod}
          </Text>
          <Text as="p">
            <Text weight="bold">Total Price:</Text> {order.totalPrice}
          </Text>
          <Text as="p">
            <Text weight="bold">Status:</Text> {order.status}
          </Text>
          <Text as="p">
            <Text weight="bold">Created At:</Text> {new Date(order.createdAt).toDateString()}
          </Text>
          <Text as="p">
            <Text weight="bold">Updated At:</Text> {new Date(order.updatedAt).toDateString()}
          </Text>
        </Card>
      </div>
    </div>
  )
}
