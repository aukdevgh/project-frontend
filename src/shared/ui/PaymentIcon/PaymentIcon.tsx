import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'

import cls from './PaymentIcon.module.scss'
import { Icon } from '../Icon/Icon'

interface PaymentIconProps {
  className?: string
  type: 'Visa' | 'GooglePay' | 'ApplePay' | 'MasterCard' | 'PayPal'
  size?: 'small' | 'big'
}

export const PaymentIcon: FC<PaymentIconProps> = ({ className, type, size = 'small' }) => {
  return (
    <div className={classNames(cls['payment-card'], {}, [className, cls[size]])} aria-label={type}>
      <Icon type={type} width={'100%'} height={'100%'} />
    </div>
  )
}
