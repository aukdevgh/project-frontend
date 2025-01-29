import { FC } from 'react'

import { type Product, ProductPrice, ProductRating } from '@entities/Product'

import { classNames } from '@shared/lib/classNames'
import { generateCategoryPath } from '@shared/lib/path'
import { AppLink, AppImage, Headling } from '@shared/ui'

import cls from './SearchItem.module.scss'

interface SearchItemProps {
  className?: string
  product: Product
}

export const SearchItem: FC<SearchItemProps> = ({ className, product }) => {
  return (
    <AppLink
      className={classNames(cls['search-item'], {}, [className])}
      to={`${generateCategoryPath(product.category)}/${product.id}`}
      variant="clear"
    >
      <AppImage className={cls.image} src={product.thumbnail} width={60} height={'100%'} />

      <div className={cls.info}>
        <Headling className={cls.title} as="h2" transform="capitalize" wrap="nowrap">
          {product.name}
        </Headling>

        <ProductRating rating={product.rating} />

        <ProductPrice size="small" price={product.price} discountPercentage={product.discountPercentage} />
      </div>
    </AppLink>
  )
}
