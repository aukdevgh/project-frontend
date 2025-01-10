import { FC } from 'react'

import { Product } from '@entities/Product'

import { classNames } from '@shared/lib/classNames'
import { toUSD, getDsicountPrice } from '@shared/lib/currency'
import { AppImage } from '@shared/ui/AppImage'
import { Headling } from '@shared/ui/Headling'
import { AppLink } from '@shared/ui/Link'
import { StarRating } from '@shared/ui/StarRating'
import { Text } from '@shared/ui/Text'

import cls from './SearchItem.module.scss'

interface SearchItemProps {
  className?: string
  product: Product
}

export const SearchItem: FC<SearchItemProps> = ({ className, product }) => {
  return (
    <div className={classNames(cls['search-item'], {}, [className])}>
      <AppImage className={cls.image} src={product.thumbnail} width={60} height={80} />

      <div className={cls.info}>
        <AppLink to={`${product.id}`}>
          <Headling className={cls.title} as="h2" transform="capitalize" wrap="nowrap">
            {product.title}
          </Headling>
        </AppLink>

        <StarRating rating={product?.rating} readonly />

        {product.discountPercentage ? (
          <div className={cls.price}>
            <Text weight="bold">{toUSD(getDsicountPrice(product.price, product.discountPercentage))}</Text>
            <Text weight="bold" decoration="line-through" deprecated={true}>
              {toUSD(product?.price)}
            </Text>
            <Text className={cls.discount} size="xs" weight="medium">
              {`-${product.discountPercentage}%`}
            </Text>
          </div>
        ) : (
          <Text weight="bold">{product?.price && toUSD(product?.price)}</Text>
        )}
      </div>
    </div>
  )
}
