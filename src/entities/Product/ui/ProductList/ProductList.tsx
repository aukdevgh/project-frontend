import { FC } from 'react'

import { Product } from '@entities/Product/types'

import { classNames } from '@shared/lib/classNames'

import cls from './ProductList.module.scss'
import { ProductCard } from '../ProductCard/ProductCard'
import { ProductCartSkeleton } from '../ProductCard/ProductCart.skeleton'

interface ProductListProps {
  className?: string
  products?: Product[]
  isFetching?: boolean
}

export const ProductList: FC<ProductListProps> = ({ className, products = [], isFetching }) => {
  if (isFetching) {
    return (
      <ul className={classNames(cls.list, {}, [className])}>
        {[1, 2, 3, 4].map((product) => (
          <li key={product}>
            <ProductCartSkeleton />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className={classNames(cls.list, {}, [className])}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard productId={product.id} />
        </li>
      ))}
    </ul>
  )
}
