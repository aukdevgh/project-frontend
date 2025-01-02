import { FC } from 'react'
import { useParams } from 'react-router'

import { useGetProductsByCategoryQuery, ProductList } from '@entities/Product'

import cls from './Products.module.scss'

const Products: FC = () => {
  const { subcategory } = useParams()
  const { data, isFetching } = useGetProductsByCategoryQuery({ category: `${subcategory}` })

  return (
    <div className={cls.products}>
      <ProductList products={data?.products} isFetching={isFetching} />
    </div>
  )
}
export default Products
