import { FC } from 'react'

import { ImageSkeleton, Skeleton } from '@shared/ui/Skeleton'

import cls from './ProductCard.module.scss'

export const ProductCartSkeleton: FC = () => {
  return (
    <div className={cls.card}>
      <ImageSkeleton className={cls.image} height={298} width={295} />
      <div className={cls.text}>
        <Skeleton height={24} width={'80%'} />
        <div className={cls.rating}>
          <Skeleton height={18} width={'30%'} />
          <Skeleton height={18} width={24} />
        </div>
        <Skeleton height={30} width={48} />
      </div>
    </div>
  )
}
