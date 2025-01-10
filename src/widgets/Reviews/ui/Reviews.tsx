import { FC, useEffect, useState } from 'react'
import { Virtual, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Review } from '@entities/Product'

import { classNames } from '@shared/lib/classNames'
import { Button } from '@shared/ui/Button'
import { Container } from '@shared/ui/Container'
import { Headling } from '@shared/ui/Headling'
import { Icon } from '@shared/ui/Icon'
import { StarRating } from '@shared/ui/StarRating'
import { Text } from '@shared/ui/Text'

import './Reviews.scss'

import { useGetHighRatingReviewsQuery } from '../hooks'

interface ReaviewsProps {
  className?: string
}

export const Reviews: FC<ReaviewsProps> = ({ className }) => {
  const [limit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [reviews, setReviews] = useState<Review[]>([])

  const { data, isFetching, isError } = useGetHighRatingReviewsQuery({ limit, offset })

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
    <div className={classNames('reviews-container', {}, [className])}>
      <Container className="reviews-header">
        <Headling className="reviews-title" as="h2" size="title-large">
          OUR HAPPY CUSTOMERS
        </Headling>
        <div className="swiper-buttons">
          <Button className="button-prev" variant="clear" size="icon" aria-label="prev">
            <Icon type="ArrowLeft" width={24} height={24} />
          </Button>
          <Button className="button-next" variant="clear" size="icon" aria-label="next">
            <Icon className="arrow-right" type="ArrowLeft" width={24} height={24} />
          </Button>
        </div>
      </Container>

      <Swiper
        className="review-swiper"
        modules={[Virtual, Navigation]}
        spaceBetween={16}
        slidesPerView={1.1}
        virtual
        navigation={{
          prevEl: '.button-prev',
          nextEl: '.button-next',
        }}
        onSlideChange={({ activeIndex, slides }) => {
          if (activeIndex >= slides.length - 3) {
            loadMore()
          }
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2.5,
          },
          1440: {
            slidesPerView: 3.5,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide className="review-slider" key={review.comment} virtualIndex={index}>
            <div className="review-card">
              <StarRating className="review-rating" rating={review.rating} readonly={true} />
              <Headling className="review-author" as="h3" transform="capitalize">
                {review.reviewerName}
              </Headling>
              <Text className="review-comment" as="p">
                {review.comment}
              </Text>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
