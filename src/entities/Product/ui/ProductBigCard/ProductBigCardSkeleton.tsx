import { FC, HTMLAttributes } from 'react'

import { classNames } from '@shared/lib/classNames'
import { ImageSwiperSkeleton, Line, Skeleton } from '@shared/ui'

import cls from './ProductBigCard.module.scss'

interface ProductBigCardSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const ProductBigCardSkeleton: FC<ProductBigCardSkeletonProps> = ({ className, ...otherProps }) => {
  return (
    <div className={classNames(cls.product, {}, [className])} {...otherProps}>
      <ImageSwiperSkeleton />
      <div className={cls['product-info']}>
        <Skeleton height={40} width={'80%'} />
        <div className={cls.rating}>
          <Skeleton height={24} width={'30%'} />
          <Skeleton height={24} width={24} />
        </div>
        <Skeleton height={30} width={48} />

        <Skeleton height={40} width={'100%'} />

        <Line />

        <div className={cls.cart}>
          <Skeleton width={170} height={52} border="62px" />
          <Skeleton width={400} height={52} border="62px" />
        </div>
      </div>
    </div>
  )
}
