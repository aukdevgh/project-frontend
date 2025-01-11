import { FC, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Button } from '@shared/ui/Button'
import { Headling } from '@shared/ui/Headling'
import { Text } from '@shared/ui/Text'

import cls from './ProductReviews.module.scss'
import { useLazyGetReviewsByProductIdQuery } from '../../hooks'
import { Review } from '../../types'
import { ReviewCard } from '../ReviewCard/ReviewCard'
import { ReviewCardSkeleton } from '../ReviewCard/ReviewCardSkeleton'

interface ProductReviewsProps {
  className?: string
  productId?: string
}

export const ProductReviews: FC<ProductReviewsProps> = ({ className, productId }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [limit] = useState(isMobile ? 3 : 9)
  const [offset, setOffset] = useState(0)
  const [reviews, setReviews] = useState<Review[]>([])
  const [getReviewsById, { data, isFetching, isError }] = useLazyGetReviewsByProductIdQuery()
  const isAuth = false

  useEffect(() => {
    if (productId) {
      getReviewsById({ productId, limit, offset })
    }
  }, [productId, limit, offset, getReviewsById])

  useEffect(() => {
    if (data?.reviews) {
      setReviews((prev) => [...prev, ...data.reviews])
    }
  }, [data])

  const loadMore = () => {
    if (!isFetching && !isError) {
      setOffset((prev) => prev + limit)
    }
  }

  return (
    <div className={className}>
      <div className={cls.header}>
        <Headling className={cls.title} as="h2" transform="capitalize">
          all reviews <Text>({data?.total})</Text>
        </Headling>
        <Button className={cls.btn} disabled={!isAuth}>
          Write a Review
        </Button>
      </div>
      <ul className={cls.reviews}>
        {isFetching
          ? ['1', '2', '3', '4'].map((review) => (
              <li className={cls.review} key={review}>
                <ReviewCardSkeleton withDate={true} />
              </li>
            ))
          : reviews?.map((review) => (
              <li className={cls.review} key={review.reviewerEmail}>
                <ReviewCard review={review} withDate={true} />
              </li>
            ))}
      </ul>

      {data?.hasMore && (
        <Button onClick={loadMore} variant="secondary">
          load more reviews
        </Button>
      )}
    </div>
  )
}
