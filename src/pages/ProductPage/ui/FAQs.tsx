import { FC } from 'react'

import { type ProductDetails } from '@entities/Product'

import { Text } from '@shared/ui/Text'

import cls from './ProductPage.module.scss'

interface FAQsProps {
  product?: ProductDetails
}

export const FAQs: FC<FAQsProps> = ({ product }) => {
  return (
    <div className={cls.faqs}>
      <ul className={cls.list}>
        <li>
          Return Policy: <Text>{product?.returnPolicy || '-'}</Text>
        </li>
        <li>
          Minimum Order Quantity: <Text>{product?.minimumOrderQuantity || '-'}</Text>
        </li>
      </ul>
    </div>
  )
}
