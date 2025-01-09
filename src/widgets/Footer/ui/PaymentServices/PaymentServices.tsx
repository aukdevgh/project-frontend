import { memo } from 'react'

import { classNames } from '@shared/lib/classNames'
import { AppImage } from '@shared/ui/AppImage'

import cls from './PaymentServices.module.scss'

interface PaymentServicesProps {
  className?: string
}

export const PaymentServices = memo(({ className }: PaymentServicesProps) => {
  return (
    <div className={classNames(cls['payment-services'], {}, [className])}>
      <AppImage className={cls['payment-service']} src={'/img/badge/visa.png'} alt="vise" />
      <AppImage className={cls['payment-service']} src={'/img/badge/master-card.png'} alt="MasterCardIcon" />
      <AppImage className={cls['payment-service']} src={'/img/badge/pay-pal.png'} alt="PayPalIcon" />
      <AppImage className={cls['payment-service']} src={'/img/badge/apple-pay.png'} alt="ApplePayIcon" />
      <AppImage className={cls['payment-service']} src={'/img/badge/google-pay.png'} alt="GooglePayIcon" />
    </div>
  )
})
