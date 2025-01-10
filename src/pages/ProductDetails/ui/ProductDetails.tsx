import { FC } from 'react'
import { useParams } from 'react-router'

import { useGetProductById } from '@entities/Product'

const ProductDetails: FC = () => {
  const { category, subcategory, productId } = useParams()

  const product = useGetProductById(productId)

  return (
    <div>
      <h1>Product Details</h1>
      <p>Category: {category}</p>
      <p>Subcategory: {subcategory}</p>
      <p>Product: {product?.title}</p>
    </div>
  )
}

export default ProductDetails
