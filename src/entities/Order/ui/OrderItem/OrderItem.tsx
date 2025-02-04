import { FC } from 'react'

import { type CartItem } from '@entities/Cart'

import { classNames } from '@shared/lib/classNames'
import { toUSD } from '@shared/lib/format'
import { generateCategoryPath } from '@shared/lib/path'
import { AppImage, AppLink, Card, Headling, Text } from '@shared/ui'

import cls from './OrderItem.module.scss'

interface OrderItemProps {
  className?: string
  item: CartItem
}

export const OrderItem: FC<OrderItemProps> = ({ className, item }) => {
  return (
    <Card className={classNames(cls['order-item'], {}, [className])}>
      <AppImage src={item.image} alt={item.name} width={120} height={160} radius="xs" />

      <div className={cls.info}>
        <Headling as="h3" transform="capitalize">
          <AppLink to={`/${generateCategoryPath(item.category)}/${item.id}`}>{item.name}</AppLink>
        </Headling>
        <Text as="p">
          <Text weight="bold">Size:</Text> {item.size}
        </Text>
        <Text as="p">
          <Text weight="bold">Color:</Text> {item.color}
        </Text>
        <Text as="p">
          <Text weight="bold">Quantity:</Text> {item.quantity}
        </Text>
        <Text className={cls.price} size="l" weight="bold">
          {toUSD(item.price)}
        </Text>
      </div>
    </Card>
  )
}
