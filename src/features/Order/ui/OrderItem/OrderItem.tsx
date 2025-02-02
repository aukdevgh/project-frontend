import { FC } from 'react'

import { type CartItem } from '@features/Cart'

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
      <AppImage className={cls.img} src={item.image} alt={item.name} width={100} height={160} />

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
