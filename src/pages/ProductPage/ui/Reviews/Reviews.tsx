import { FC } from 'react'

import { useGetIsAuth } from '@features/Auth'
import { ReviewForm } from '@features/Review'

import { ReviewsList } from '@entities/Review'

import { useModal } from '@shared/hooks/useModal'
import { classNames } from '@shared/lib/classNames'
import { Button, Card, Headling, Icon, Modal } from '@shared/ui'

import cls from './Reviews.module.scss'

interface ReviewsProps {
  className?: string
}

export const Reviews: FC<ReviewsProps> = ({ className }) => {
  const isAuth = useGetIsAuth()

  const { isOpen, onOpen, onClose } = useModal()
  return (
    <div className={classNames(cls.reviews, {}, [className])}>
      <div className={cls.header}>
        <Headling className={cls.title} as="h2" transform="capitalize">
          reviews
        </Headling>
        <Button className={cls.btn} disabled={!isAuth} onClick={onOpen}>
          Write a Review
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <Card className={cls['review-card']}>
            <div className={cls.header}>
              <Headling className={cls.title} as="h2" transform="capitalize">
                Send us your feedback!
              </Headling>
              <Button onClick={onClose} variant="clear" aria-label="review modal close">
                <Icon type="Close" width={28} height={28} />
              </Button>
            </div>

            <ReviewForm />
          </Card>
        </Modal>
      </div>
      <ReviewsList />
    </div>
  )
}
