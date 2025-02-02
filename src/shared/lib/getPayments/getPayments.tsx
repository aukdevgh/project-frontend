import { PaymentIcon } from '@shared/ui/PaymentIcon/PaymentIcon'

export const getPayments = (size: 'small' | 'big') => [
  {
    value: 'visa',
    label: <PaymentIcon type="Visa" size={size} key={'visa'} />,
  },
  {
    value: 'master-card',
    label: <PaymentIcon type="MasterCard" size={size} key={'master-card'} />,
  },
  {
    value: 'pay-pal',
    label: <PaymentIcon type="PayPal" size={size} key={'pay-pal'} />,
  },
  {
    value: 'apple-pay',
    label: <PaymentIcon type="ApplePay" size={size} key={'apple-pay'} />,
  },
  {
    value: 'google-pay',
    label: <PaymentIcon type="GooglePay" size={size} key={'google-pay'} />,
  },
]
