import { FC, useState } from 'react'

import { ProductDetails } from '@entities/Product/types'

import { classNames } from '@shared/lib/classNames'
import { toUSD, getDsicountPrice } from '@shared/lib/format'
import { Button } from '@shared/ui/Button'
import { Headling } from '@shared/ui/Headling'
import { Icon } from '@shared/ui/Icon'
import { ImageSwiper } from '@shared/ui/ImageSwiper'
import { Line } from '@shared/ui/Line'
import { StarRating } from '@shared/ui/StarRating'
import { Text } from '@shared/ui/Text'

import cls from './ProductBigCard.module.scss'

interface ProductBigCardProps {
  className?: string
  product?: ProductDetails
}

export const ProductBigCard: FC<ProductBigCardProps> = ({ className, product }) => {
  const [quantity, setQuantity] = useState(1)

  const onMinus = () => setQuantity((prev) => (prev - 1 ? prev - 1 : 1))
  const onPlus = () => setQuantity((prev) => prev + 1)
  return (
    <div className={classNames(cls.product, {}, [className])}>
      <ImageSwiper images={product?.images} />

      <div className={cls['product-info']}>
        <Headling size="title-medium" weight="bold">
          {product?.title}
        </Headling>

        <div className={cls.rating}>
          <StarRating rating={product?.rating} size={22} readonly />
          <Text as="span" size="s">
            {`${product?.rating}/5`}
          </Text>
        </div>

        {product?.discountPercentage ? (
          <div className={cls.price}>
            <Text as="span" size="l" weight="bold">
              {toUSD(getDsicountPrice(product.price, product.discountPercentage))}
            </Text>
            <Text as="span" size="l" weight="bold" decoration="line-through" deprecated={true}>
              {toUSD(product?.price)}
            </Text>
            <Text className={cls.discount} as="span" size="xs" weight="medium">
              {`-${product.discountPercentage}%`}
            </Text>
          </div>
        ) : (
          <Text as="span" size="l" weight="bold">
            {product?.price && toUSD(product?.price)}
          </Text>
        )}

        <Text className={cls.description} as="p">
          {product?.description}
        </Text>

        <Line />

        <div className={cls.cart}>
          <div className={cls.quantity}>
            <Button onClick={onMinus} variant="clear" size="icon" aria-label="minus">
              <Icon type="Minus" width={24} height={24} />
            </Button>
            <Text>{quantity}</Text>
            <Button onClick={onPlus} variant="clear" size="icon" aria-label="plus">
              <Icon type="Plus" width={24} height={24} />
            </Button>
          </div>
          <Button className={cls['add-btn']}>Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}
