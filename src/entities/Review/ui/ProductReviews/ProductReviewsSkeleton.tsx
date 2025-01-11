import { ReviewCardSkeleton } from '@entities/Review'

import { Skeleton } from '@shared/ui/Skeleton'

import cls from './ProductReviews.module.scss'

export const ProductReviewsSkeleton = () => {
  return (
    <div>
      <div className={cls.header}>
        <Skeleton className={cls.title} width={150} height={24} />
        <Skeleton className={cls.title} width={160} height={52} />
      </div>
      <ul className={cls.reviews}>
        {['1', '2', '3', '4'].map((review) => (
          <li className={cls.review} key={review}>
            <ReviewCardSkeleton withDate={true} />
          </li>
        ))}
      </ul>

      <Skeleton className={cls.title} width={200} height={52} />
    </div>
  )
}
