import { Swiper, SwiperSlide } from 'swiper/react'

import { ImageSkeleton } from '@shared/ui'

import './ImageSwiper.scss'

export const ImageSwiperSkeleton = () => {
  return (
    <div className="images-swiper-wrapper">
      <Swiper spaceBetween={10} slidesPerView={3} className="images-swiper-thumbs" direction="vertical">
        {['1', '2', '3'].map((img) => (
          <SwiperSlide key={`${img}-thumb`}>
            <ImageSkeleton width={152} height={168} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper spaceBetween={10} className="images-swiper-main">
        {['1', '2', '3'].map((img) => (
          <SwiperSlide key={img}>
            <ImageSkeleton width={444} height={530} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
