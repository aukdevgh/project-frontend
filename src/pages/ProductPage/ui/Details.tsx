import { FC } from 'react'

import { type ProductDetails } from '@entities/Product'

import { Headling } from '@shared/ui/Headling'
import { Text } from '@shared/ui/Text'

import cls from './ProductPage.module.scss'

interface ProductDetailsProps {
  product?: ProductDetails
}

export const Details: FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className={cls.details}>
      <Headling as="h3">{product?.name}</Headling>
      <ul className={cls.list}>
        <li>
          Category: <Text>{product?.category || '-'}</Text>
        </li>
        <li>
          Brand: <Text>{product?.brand || '-'}</Text>
        </li>
        <li>
          SKU: <Text>{product?.sku || '-'}</Text>
        </li>
        <li>
          Warranty: <Text>{product?.warrantyInformation || '-'}</Text>
        </li>
        <li>
          Shipping: <Text>{product?.shippingInformation || '-'}</Text>
        </li>
        <li>
          Availability: <Text>{product?.availabilityStatus || '-'}</Text>
        </li>
      </ul>
    </div>
  )
}
