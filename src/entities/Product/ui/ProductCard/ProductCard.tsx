import { FC } from 'react'

import { useGetProductByIdQuery } from '@entities/Product/lib/hooks'

import { classNames } from '@shared/lib/classNames'
import { toUSD } from '@shared/lib/formatCurrency'
import { AppImage } from '@shared/ui/AppImage'
import { Headling } from '@shared/ui/Headling'
import { AppLink } from '@shared/ui/Link'
import { StarRating } from '@shared/ui/StarRating'
import { Text } from '@shared/ui/Text'

import cls from './ProductCard.module.scss'
import { ProductCartSkeleton } from './ProductCart.skeleton'

interface ProductCardProps {
  className?: string
  productId: number
}

export const ProductCard: FC<ProductCardProps> = ({ className, productId }) => {
  const { data: product, isFetching } = useGetProductByIdQuery(productId)

  if (isFetching) {
    return <ProductCartSkeleton />
  }

  return (
    <div className={classNames(cls.card, {}, [className])}>
      <AppImage className={cls.image} src={product?.thumbnail} width={295} height={298} />
      <div className={cls.text}>
        <AppLink to={`${product?.id}`}>
          <Headling className={cls.title} as="h2" transform="capitalize" wrap="nowrap">
            {product?.title}
          </Headling>
        </AppLink>

        <div className={cls.rating}>
          <StarRating rating={3} readonly />
          <Text as="span" size="s">
            3/5
          </Text>
        </div>
        <Text as="span" size="l" weight="bold">
          {toUSD(180)}
        </Text>
      </div>
    </div>
  )
}
