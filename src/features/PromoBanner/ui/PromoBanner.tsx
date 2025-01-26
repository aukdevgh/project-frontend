import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { getRouteSignUp } from '@shared/lib/routes'
import { AppLink, Text } from '@shared/ui'

import cls from './PromoBanner.module.scss'

interface PromoBannerProps {
  className?: string
}

export const PromoBanner: FC<PromoBannerProps> = ({ className }) => {
  return (
    <div className={classNames(cls['promo-anner'], {}, [className])}>
      <Text>Sign up and get 20% off your first order! </Text>
      <AppLink className={cls.link} to={getRouteSignUp()} variant="clear">
        Sign Up Now
      </AppLink>
    </div>
  )
}
