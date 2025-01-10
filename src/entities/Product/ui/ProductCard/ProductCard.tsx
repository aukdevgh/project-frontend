import { FC } from 'react'

import { classNames } from '@shared/lib/classNames'
import { getDsicountPrice, toUSD } from '@shared/lib/format'
import { generateCategoryPath } from '@shared/lib/path'
import { AppImage } from '@shared/ui/AppImage'
import { Headling } from '@shared/ui/Headling'
import { AppLink } from '@shared/ui/Link'
import { StarRating } from '@shared/ui/StarRating'
import { Text } from '@shared/ui/Text'

import cls from './ProductCard.module.scss'
import { Product } from '../../types'

interface ProductCardProps {
  className?: string
  product: Product
}

export const ProductCard: FC<ProductCardProps> = ({ className, product }) => {
  return (
    <div className={classNames(cls.card, {}, [className])}>
      <AppImage className={cls.image} src={product.thumbnail} width={295} height={298} />
      <div className={cls.text}>
        <AppLink to={`${generateCategoryPath(product.category)}/${product.id}`}>
          <Headling className={cls.title} as="h2" transform="capitalize" wrap="nowrap">
            {product.title}
          </Headling>
        </AppLink>

        <div className={cls.rating}>
          <StarRating rating={product?.rating} readonly />
          <Text as="span" size="s">
            {`${product?.rating}/5`}
          </Text>
        </div>

        {product.discountPercentage ? (
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
      </div>
    </div>
  )
}
