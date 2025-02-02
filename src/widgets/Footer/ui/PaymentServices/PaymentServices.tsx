import { memo } from 'react'

import { classNames } from '@shared/lib/classNames'
import { getPayments } from '@shared/lib/getPayments/getPayments'

import cls from './PaymentServices.module.scss'

interface PaymentServicesProps {
  className?: string
}

export const PaymentServices = memo(({ className }: PaymentServicesProps) => {
  return (
    <div className={classNames(cls['payment-services'], {}, [className])}>
      {getPayments('small').map((payment) => payment.label)}
    </div>
  )
})
