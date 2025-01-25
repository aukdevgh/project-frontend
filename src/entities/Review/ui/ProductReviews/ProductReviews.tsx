import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { useGetHasLoaded } from '@entities/Review/model/selectors/getHasLoadedReviews/getHasLoadedReviews'
import { useGetHasMoreReviews } from '@entities/Review/model/selectors/getHasMoreReviews/getHasMoreReviews'
import { useGetReviews } from '@entities/Review/model/selectors/getReviews/getReviews'
import { useGetReviewsPage } from '@entities/Review/model/selectors/getReviewsPage/getReviewsPage'
import { useGetTotalReviews } from '@entities/Review/model/selectors/getTotalReviews/getTotalReviews'
import { useReviewsActions } from '@entities/Review/model/slice/reviewsSlice'

import { Button } from '@shared/ui/Button'
import { Headling } from '@shared/ui/Headling'
import { Text } from '@shared/ui/Text'

import cls from './ProductReviews.module.scss'
import { useLazyGetReviewsByProductIdQuery } from '../../hooks'
import { ReviewCard } from '../ReviewCard/ReviewCard'
import { ReviewCardSkeleton } from '../ReviewCard/ReviewCardSkeleton'

interface ProductReviewsProps {
  className?: string
  productId?: string
}

export const ProductReviews: FC<ProductReviewsProps> = ({ className, productId }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [limit] = useState(isMobile ? 3 : 9)

  const reviews = useGetReviews()
  const totalReviews = useGetTotalReviews()
  const hasMoreReviews = useGetHasMoreReviews()
  const reviewsPage = useGetReviewsPage()
  const hasLoaded = useGetHasLoaded()
  const { setReviewsData, setReviewsPage } = useReviewsActions()

  const [getReviewsById, { data, isFetching, isError }] = useLazyGetReviewsByProductIdQuery()
  const isAuth = false

  useEffect(() => {
    if (productId && !reviews.length && !hasLoaded) {
      getReviewsById({ productId, limit, page: reviewsPage })
    }
  }, [productId, limit, reviewsPage, getReviewsById, reviews, hasLoaded])

  useEffect(() => {
    if (data?.reviews) {
      setReviewsData({
        reviews: data.reviews,
        hasMore: data.hasMore,
        total: data.total,
        hasLoaded: true,
      })
    }
  }, [data, setReviewsData])

  const loadMore = useCallback(() => {
    if (!isFetching && !isError) {
      setReviewsPage(reviewsPage! + 1)
    }
  }, [isFetching, isError, setReviewsPage, reviewsPage])

  const skeletons = useMemo(
    () =>
      Array.from({ length: limit }).map((_, index) => (
        <li className={cls.review} key={index}>
          <ReviewCardSkeleton withDate={true} />
        </li>
      )),
    [limit]
  )

  return (
    <div className={className}>
      <div className={cls.header}>
        <Headling className={cls.title} as="h2" transform="capitalize">
          all reviews <Text>({totalReviews})</Text>
        </Headling>
        <Button className={cls.btn} disabled={!isAuth}>
          Write a Review
        </Button>
      </div>

      <ul className={cls.reviews}>
        {isFetching && reviewsPage === 1 ? (
          skeletons
        ) : reviews.length ? (
          reviews.map((review) => (
            <li className={cls.review} key={review.reviewerEmail}>
              <ReviewCard review={review} withDate={true} />
            </li>
          ))
        ) : (
          <Text>No reviews yet.</Text>
        )}
      </ul>

      {hasMoreReviews && (
        <Button onClick={loadMore} variant="secondary" disabled={isFetching}>
          {isFetching ? 'Loading...' : 'Load more reviews'}
        </Button>
      )}
    </div>
  )
}
