import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { FC, useState } from 'react'
import { useParams } from 'react-router'

import { useAddReviewMutation } from '@entities/Review'

import { classNames } from '@shared/lib/classNames'
import { Button, StarRating, Text } from '@shared/ui'

import cls from './ReviewForm.module.scss'

interface ReviewFormProps {
  className?: string
}

export const ReviewForm: FC<ReviewFormProps> = ({ className }) => {
  const { productId } = useParams()
  const [text, setText] = useState('')
  const [rating, setRating] = useState(5)

  const [addReview, { isLoading: isAdding, error, isError, isSuccess }] = useAddReviewMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim() || !productId) return

    addReview({ productId, text, rating })

    setText('')
    setRating(5)
  }

  const errorMessage = (error as FetchBaseQueryError)?.data as { msg: string } | undefined

  return (
    <form className={classNames(cls['review-form'], {}, [className])} onSubmit={handleSubmit}>
      <div className={cls.rating}>
        <StarRating onRatingChange={setRating} rating={rating} size={36} />
        <Text size="xl" weight="bold">
          {rating}
        </Text>
      </div>

      <textarea className={cls.textarea} value={text} onChange={(e) => setText(e.target.value)} required />
      <Button type="submit" disabled={isAdding} loading={isAdding}>
        Submit Review
      </Button>

      {isSuccess && <Text success>review created successfully</Text>}
      {isError && <Text error>{errorMessage?.msg}</Text>}
    </form>
  )
}
