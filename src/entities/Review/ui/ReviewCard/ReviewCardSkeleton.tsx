import { FC } from 'react'

import { Skeleton } from '@shared/ui'

import cls from './ReviewCard.module.scss'

interface ReviewCardSkeletonProps {
  withDate?: boolean
}

export const ReviewCardSkeleton: FC<ReviewCardSkeletonProps> = ({ withDate }) => {
  return (
    <div className={cls.review}>
      <Skeleton className={cls.rating} height={22} width={130} />
      <Skeleton className={cls.author} height={28} width={150} />
      <Skeleton className={cls.comment} style={{ marginBottom: '10px' }} height={22} width={180} />
      <Skeleton className={cls.comment} height={22} width={120} />

      {withDate && <Skeleton className={cls.date} height={22} width={120} />}
    </div>
  )
}
