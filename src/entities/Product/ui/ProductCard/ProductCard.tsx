import { FC } from 'react'
import { useParams } from 'react-router'

import { classNames } from '@shared/lib/classNames'
import { generateCategoryPath } from '@shared/lib/path'
import { AppImage } from '@shared/ui/AppImage'
import { Headling } from '@shared/ui/Headling'
import { AppLink } from '@shared/ui/Link'

import cls from './ProductCard.module.scss'
import { type Product } from '../../types'
import { ProductPrice } from '../ProductPrice/ProductPrice'
import { ProductRating } from '../ProductRating/ProductRating'

interface ProductCardProps {
  className?: string
  product: Product
}

export const ProductCard: FC<ProductCardProps> = ({ className, product }) => {
  const { catalog } = useParams()
  return (
    <AppLink
      className={classNames(cls.card, {}, [className])}
      to={`${generateCategoryPath(product.category, catalog)}/${product.id}`}
      variant="clear"
    >
      <AppImage className={cls.image} src={product.thumbnail} width={295} height={298} />
      <div className={cls.text}>
        <Headling className={cls.title} as="h2" transform="capitalize" wrap="nowrap">
          {product.name}
        </Headling>

        <ProductRating rating={product.rating} />

        <ProductPrice price={product.price} discountPercentage={product.discountPercentage} />
      </div>
    </AppLink>
  )
}
