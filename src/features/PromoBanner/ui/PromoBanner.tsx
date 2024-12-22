import { FC } from 'react'
import { Link } from 'react-router'

import { classNames } from '@shared/lib/classNames/classNames'
import { getRouteSignUp } from '@shared/lib/routes'

import cls from './PromoBanner.module.scss'

interface PromoBannerProps {
  className?: string
}

export const PromoBanner: FC<PromoBannerProps> = ({ className }) => {
  return (
    <div className={classNames(cls['promo-anner'], {}, [className])}>
      <span>Sign up and get 20% off your first order! </span>
      <Link className={cls.link} to={getRouteSignUp()}>
        Sign Up Now
      </Link>
    </div>
  )
}
