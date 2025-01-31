import { FC } from 'react'

import { ImageSkeleton, Skeleton } from '@shared/ui'

import cls from './CartItem.module.scss'

export const CartItemSkeleton: FC = () => {
  return (
    <div className={cls['cart-item']}>
      <ImageSkeleton width={124} height={124} />

      <div className={cls.inner}>
        <div className={cls.info}>
          <Skeleton height={22} width={150} />
          <Skeleton height={18} width={100} />
          <Skeleton height={18} width={100} />
          <Skeleton height={28} width={80} />
        </div>
        <div className={cls.actions}>
          <Skeleton height={32} width={32} border="8px" />

          <div className={cls.quantity}>
            <Skeleton height={56} width={140} border="50%" />
          </div>
        </div>
      </div>
    </div>
  )
}
