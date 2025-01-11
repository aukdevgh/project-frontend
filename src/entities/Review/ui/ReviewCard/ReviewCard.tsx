import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { getPostDate } from '@shared/lib/format'
import { Headling } from '@shared/ui/Headling'
import { StarRating } from '@shared/ui/StarRating'
import { Text } from '@shared/ui/Text'

import cls from './ReviewCard.module.scss'
import { Review } from '../../types'

interface ReviewCardProps {
  className?: string
  review: Review
  withDate?: boolean
}

export const ReviewCard: FC<ReviewCardProps> = ({ className, review, withDate, ...otherProps }) => {
  return (
    <div className={classNames(cls.review, {}, [className])} {...otherProps}>
      <StarRating className={cls.rating} rating={review.rating} readonly={true} size={22} />
      <Headling className={cls.author} as="h3" transform="capitalize">
        {review.reviewerName}
      </Headling>
      <Text className={cls.comment} as="p">
        {review.comment}
      </Text>

      {withDate && <time className={cls.date}>{getPostDate(review.date)}</time>}
    </div>
  )
}
