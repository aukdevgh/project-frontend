import { FC } from 'react'

import { Card, ImageSkeleton, Skeleton } from '@shared/ui'

import cls from './OrderItem.module.scss'

export const OrderItemSkeleton: FC = () => {
  return (
    <Card className={cls['order-item']}>
      <ImageSkeleton width={120} height={160} radius="xs" />

      <div className={cls.info}>
        <Skeleton height={22} width={120} />
        <Skeleton height={20} width={80} />
        <Skeleton height={20} width={100} />
        <Skeleton height={20} width={80} />
        <Skeleton height={20} width={60} />
      </div>
    </Card>
  )
}
