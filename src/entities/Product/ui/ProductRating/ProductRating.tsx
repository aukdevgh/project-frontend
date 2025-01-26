import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Text, StarRating } from '@shared/ui'

import cls from './ProductRating.module.scss'

interface ProductRatingProps {
  className?: string
  rating: number
}

export const ProductRating: FC<ProductRatingProps> = ({ className, rating }) => {
  return (
    <div className={classNames(cls.rating, {}, [className])}>
      <StarRating rating={rating} readonly />
      <Text as="span" size="s">
        {`${rating}/5`}
      </Text>
    </div>
  )
}
