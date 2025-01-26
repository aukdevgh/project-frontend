import { FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Product, ProductCardSkeleton } from '@entities/Product'
import { ProductCard } from '@entities/Product/ui/ProductCard/ProductCard'

import { classNames } from '@shared/lib/classNames'
import { Container } from '@shared/ui'

import cls from './ShowcaseProducts.module.scss'

interface ShowcaseProductsProps {
  className?: string
  products?: Product[]
  isFetching: boolean
}

export const ShowcaseProducts: FC<ShowcaseProductsProps> = ({ className, products, isFetching }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  if (isFetching || !products?.length) {
    return (
      <>
        {isMobile ? (
          <Swiper
            className={cls.swiper}
            spaceBetween={16}
            slidesPerView={1.5}
            breakpoints={{
              375: {
                slidesPerView: 1.8,
              },
              480: {
                slidesPerView: 2.3,
              },
              580: {
                slidesPerView: 2.5,
              },
            }}
          >
            {[1, 2, 3, 4].map((product) => (
              <SwiperSlide className={cls.slider} key={product}>
                <ProductCardSkeleton />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Container>
            <ul className={classNames(cls.list, {}, [className])}>
              {[1, 2, 3, 4].map((product) => (
                <li key={product}>
                  <ProductCardSkeleton />
                </li>
              ))}
            </ul>
          </Container>
        )}
      </>
    )
  }

  return (
    <>
      {isMobile ? (
        <Swiper
          className={cls.swiper}
          spaceBetween={16}
          slidesPerView={1.5}
          breakpoints={{
            375: {
              slidesPerView: 1.8,
            },
            480: {
              slidesPerView: 2.3,
            },
            580: {
              slidesPerView: 2.5,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide className={cls.slider} key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Container>
          <ul className={classNames(cls.list, {}, [className])}>
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </Container>
      )}
    </>
  )
}
