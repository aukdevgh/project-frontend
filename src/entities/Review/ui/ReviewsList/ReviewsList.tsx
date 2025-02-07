import { FC, useCallback, useMemo, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useParams } from 'react-router'

import { classNames } from '@shared/lib/classNames'
import { Button, Text } from '@shared/ui'

import cls from './ReviewsList.module.scss'
import { useGetReviewsByProductIdQuery } from '../../api/reviewApi'
import { ReviewCard } from '../ReviewCard/ReviewCard'
import { ReviewCardSkeleton } from '../ReviewCard/ReviewCardSkeleton'

interface ReviewsListProps {
  className?: string
}

export const ReviewsList: FC<ReviewsListProps> = ({ className }) => {
  const { productId } = useParams()
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [limit] = useState(isMobile ? 3 : 9)
  const [page, setPage] = useState(1)

  const { data, isFetching, isError } = useGetReviewsByProductIdQuery({ productId, page, limit })

  const loadMore = useCallback(() => {
    if (!isFetching && !isError && data?.hasMore) {
      setPage((prevPage) => prevPage + 1)
    }
  }, [isFetching, isError, setPage])

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
    <div className={classNames(cls.reviews, {}, [className])}>
      <ul className={cls.list}>
        {isFetching ? (
          skeletons
        ) : data?.reviews.length ? (
          data.reviews.map((review) => (
            <li className={cls.review} key={review.id}>
              <ReviewCard review={review} withDate={true} />
            </li>
          ))
        ) : (
          <li>
            <Text>No reviews yet.</Text>
          </li>
        )}
      </ul>

      {data?.hasMore && (
        <Button onClick={loadMore} variant="secondary" disabled={isFetching}>
          {isFetching ? 'Loading...' : 'Load more reviews'}
        </Button>
      )}
    </div>
  )
}
