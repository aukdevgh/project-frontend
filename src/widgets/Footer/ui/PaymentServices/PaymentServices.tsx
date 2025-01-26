import { memo } from 'react'

import { classNames } from '@shared/lib/classNames'
import { AppImage } from '@shared/ui'

import cls from './PaymentServices.module.scss'

interface PaymentServicesProps {
  className?: string
}

export const PaymentServices = memo(({ className }: PaymentServicesProps) => {
  return (
    <div className={classNames(cls['payment-services'], {}, [className])}>
      <AppImage className={cls['payment-service']} src={'/img/badge/visa.png'} alt="vise" local />
      <AppImage className={cls['payment-service']} src={'/img/badge/master-card.png'} alt="MasterCardIcon" local />
      <AppImage className={cls['payment-service']} src={'/img/badge/pay-pal.png'} alt="PayPalIcon" local />
      <AppImage className={cls['payment-service']} src={'/img/badge/apple-pay.png'} alt="ApplePayIcon" local />
      <AppImage className={cls['payment-service']} src={'/img/badge/google-pay.png'} alt="GooglePayIcon" local />
    </div>
  )
})
