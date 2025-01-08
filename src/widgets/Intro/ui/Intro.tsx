import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { AppImage } from '@shared/ui/AppImage'
import { Button } from '@shared/ui/Button'
import { Container } from '@shared/ui/Container'
import { Headling } from '@shared/ui/Headling'
import { Icon } from '@shared/ui/Icon'
import { Text } from '@shared/ui/Text'

import cls from './Intro.module.scss'

interface IntroProps {
  className?: string
}

export const Intro: FC<IntroProps> = ({ className }) => {
  return (
    <div className={classNames('', {}, [className])}>
      <div className={cls.poster}>
        <Container className={cls.container}>
          <div className={cls.content}>
            <Headling className={cls.title} size="banner" weight="bold">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </Headling>
            <Text className={cls.text}>
              Browse through our diverse range of meticulously crafted garments, designed to bring out your
              individuality and cater to your sense of style.
            </Text>

            <Button className={cls.button} variant="primary">
              Shop Now
            </Button>

            <div className={cls.advantages}>
              <div className={cls.advantage}>
                <div className={cls.info}>
                  <Headling size="title-medium">200+</Headling>
                  <Text>International Brands</Text>
                </div>
              </div>

              <div className={cls.advantage}>
                <div className={cls.info}>
                  <Headling size="title-medium">2,000+</Headling>
                  <Text>High-Quality Products</Text>
                </div>
              </div>

              <div className={cls.advantage}>
                <div className={cls.info}>
                  <Headling size="title-medium">30,000+</Headling>
                  <Text>Happy Customers</Text>
                </div>
              </div>
            </div>
          </div>
          <div className={cls.img}>
            <Icon className={cls['diamond-small']} type="Diamond" width={56} height={56} />
            <Icon className={cls['diamond-big']} type="Diamond" width={104} height={104} />
            <AppImage
              width={'100%'}
              height={663}
              src="/img/banner.jpg"
              sources={[
                { srcSet: '/img/banner.webp', type: 'image/webp' },
                { srcSet: '/img/banner.jpg', type: 'image/jpg' },
              ]}
            />
          </div>
        </Container>
      </div>
      <div className={cls.brands}>
        <Container className={cls['brands-list']}>
          <Icon className={cls.brand} type="Versace" width={'100%'} height={34} />
          <Icon className={cls.brand} type="Zara" width={'100%'} height={34} />
          <Icon className={cls.brand} type="Gucci" width={'100%'} height={34} />
          <Icon className={cls.brand} type="Prada" width={'100%'} height={34} />
          <Icon className={cls.brand} type="CalvinKlein" width={'100%'} height={34} />
        </Container>
      </div>
    </div>
  )
}
