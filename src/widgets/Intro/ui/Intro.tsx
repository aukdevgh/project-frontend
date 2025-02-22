import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { getRouteNew } from '@shared/lib/routes'
import { AppImage, AppLink, Container, Headling, Icon, type IconType, Text } from '@shared/ui'

import cls from './Intro.module.scss'

interface IntroProps {
  className?: string
}

const advantages = [
  { title: '200+', text: 'International Brands' },
  { title: '2,000+', text: 'High-Quality Products' },
  { title: '30,000+', text: 'Happy Customers' },
]
const brands: IconType[] = ['Versace', 'Zara', 'Gucci', 'Prada', 'CalvinKlein']

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

            <AppLink to={getRouteNew()} className={cls.button} variant="primary">
              Shop Now
            </AppLink>

            <div className={cls.advantages}>
              {advantages.map((advantage) => (
                <div className={cls.advantage} key={advantage.text}>
                  <div className={cls.info}>
                    <Headling size="title-medium">{advantage.title}</Headling>
                    <Text>{advantage.text}</Text>
                  </div>
                </div>
              ))}
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
              loading="eager"
              local={true}
            />
          </div>
        </Container>
      </div>
      <div className={cls.brands}>
        <Container className={cls['brands-list']}>
          {brands.map((brand) => (
            <Icon className={cls.brand} key={brand} type={brand} width={'100%'} height={34} aria-label={brand} />
          ))}
        </Container>
      </div>
    </div>
  )
}
