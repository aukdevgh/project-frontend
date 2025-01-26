import { FC, useState } from 'react'
import SwiperCore from 'swiper/core'
import { FreeMode, Keyboard, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { AppImage } from '@shared/ui'
import './ImageSwiper.scss'

interface ImageSwiperProps {
  images?: string[]
}

export const ImageSwiper: FC<ImageSwiperProps> = ({ images = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>()

  return (
    <div className="images-swiper-wrapper">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={'auto'}
        freeMode={true}
        keyboard={{
          enabled: true,
        }}
        watchSlidesProgress={true}
        modules={[FreeMode, Keyboard, Thumbs]}
        className="images-swiper-thumbs"
        breakpoints={{
          390: { direction: 'horizontal' },
          1025: { direction: 'vertical' },
        }}
      >
        {images.map((img) => (
          <SwiperSlide key={`${img}-thumb`}>
            <AppImage src={img} alt={img} width={152} height={168} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        keyboard={{
          enabled: true,
        }}
        modules={[FreeMode, Keyboard, Thumbs]}
        className="images-swiper-main"
      >
        {images.map((img) => (
          <SwiperSlide key={img}>
            <AppImage src={img} alt={img} width={444} height={530} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
