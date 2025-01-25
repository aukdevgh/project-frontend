import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { toUSD, getDiscountPrice } from '@shared/lib/format'
import { Text } from '@shared/ui/Text'

import cls from './ProductPrice.module.scss'

interface ProductPriceProps {
  className?: string
  price: number
  discountPercentage?: number
  size?: 'nomal' | 'small'
}

export const ProductPrice: FC<ProductPriceProps> = ({ className, price, discountPercentage, size = 'nomal' }) => {
  return (
    <div className={classNames(cls['price-wrapper'], {}, [className, cls[size]])}>
      {discountPercentage ? (
        <>
          <Text className={cls.price} size="l" weight="bold">
            {toUSD(getDiscountPrice(price, discountPercentage))}
          </Text>
          <Text className={cls.price} size="l" weight="bold" decoration="line-through" deprecated={true}>
            {toUSD(price)}
          </Text>
          <Text className={cls.discount} size="xs" weight="medium">
            {`-${discountPercentage}%`}
          </Text>
        </>
      ) : (
        <Text className={cls.price} size="l" weight="bold">
          {price && toUSD(price)}
        </Text>
      )}
    </div>
  )
}
