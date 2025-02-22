import { FC, useEffect, useState } from 'react'
import { Virtual, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Review, ReviewCard, useGetHighRatingReviewsQuery } from '@entities/Review'

import { classNames } from '@shared/lib/classNames'
import { Container, Headling, Button, Icon } from '@shared/ui'

import './Reviews.scss'

interface ReaviewsProps {
  className?: string
}

export const Reviews: FC<ReaviewsProps> = ({ className }) => {
  const [limit] = useState(10)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [reviews, setReviews] = useState<Review[]>([])

  const { data, isFetching, isError } = useGetHighRatingReviewsQuery({ limit, page })

  useEffect(() => {
    if (data?.reviews) {
      setReviews((prev) => [...prev, ...data.reviews])
      setHasMore(data.hasMore)
    }
  }, [data])

  const loadMore = () => {
    if (!isFetching && !isError && hasMore) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  return (
    <div className={classNames('reviews-container', {}, [className])}>
      <Container className="reviews-header">
        <Headling className="reviews-title" as="h2" size="title-large">
          OUR HAPPY CUSTOMERS
        </Headling>
        <div className="swiper-buttons">
          <Button className="button-prev" variant="ghost" size="icon" aria-label="prev">
            <Icon type="ArrowLeft" width={24} height={24} />
          </Button>
          <Button className="button-next" variant="ghost" size="icon" aria-label="next">
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
          <SwiperSlide className="review-slider" key={review.id} virtualIndex={index}>
            <ReviewCard className="review-card" review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
