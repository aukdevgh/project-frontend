import { memo, useState } from 'react'

import { classNames } from '@shared/lib/classNames'
import { Icon } from '@shared/ui'

import cls from './StarRating.module.scss'

interface StarRatingProps {
  className?: string
  maxStars?: number
  rating?: number
  onRatingChange?: (rating: number) => void
  readonly?: boolean
  disabled?: boolean
  size?: number
}

export const StarRating = memo((props: StarRatingProps) => {
  const { className, maxStars = 5, rating = 0, onRatingChange, readonly, disabled, size = 18 } = props
  const [currentRating, setCurrentRating] = useState<number>(rating)
  const [hoverRating, setHoverRating] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setHoverRating(index)
  }

  const handleMouseLeave = () => {
    setHoverRating(null)
  }

  const handleClick = (index: number) => {
    setCurrentRating(index)
    if (onRatingChange) {
      onRatingChange(index)
    }
  }

  const renderStars = () => {
    return Array.from({ length: Math.ceil(rating) || maxStars }, (_, index) => {
      const starIndex = index + 1
      const isActive = hoverRating ? hoverRating >= starIndex : currentRating >= starIndex
      const isHalf = !hoverRating && currentRating > starIndex - 1 && currentRating < starIndex

      return (
        <label
          className={cls.star}
          onMouseEnter={() => handleMouseEnter(starIndex)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(starIndex)}
          key={starIndex}
        >
          <span>
            {isHalf ? (
              <Icon className={cls['half-star']} type="HalfStar" width={size} height={size} />
            ) : (
              <Icon className={classNames('', { [cls.active]: isActive })} type="Star" width={size} height={size} />
            )}
          </span>
          <span className={cls['visually-hidden']}>{starIndex} star</span>
          <input
            className={cls['visually-hidden']}
            type="radio"
            value={starIndex}
            tabIndex={readonly || disabled ? -1 : 0}
          />
        </label>
      )
    })
  }

  return (
    <div className={classNames(cls.rating, { [cls.readonly]: readonly, [cls.disabled]: disabled }, [className])}>
      {renderStars()}
    </div>
  )
})
