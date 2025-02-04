import { FC } from 'react'

import { Card, Skeleton } from '@shared/ui'

import cls from './OrderCard.module.scss'
import { OrderItemSkeleton } from '../OrderItem/OrderItem.skeleton'

export const OrderCardSkeleton: FC = () => {
  return (
    <div className={cls['order-card']}>
      <Skeleton height={24} width={120} />

      <div className={cls.content}>
        <ul className={cls.items}>
          {[1, 2].map((item) => (
            <OrderItemSkeleton key={item} />
          ))}
        </ul>

        <Card className={cls.info}>
          <Skeleton height={20} width={150} />
          <Skeleton height={20} width={130} />
          <Skeleton height={20} width={120} />
          <Skeleton height={20} width={140} />
          <Skeleton height={20} width={160} />
          <Skeleton height={20} width={160} />
        </Card>
      </div>
    </div>
  )
}
