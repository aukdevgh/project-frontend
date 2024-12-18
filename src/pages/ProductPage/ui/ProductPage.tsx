import { FC } from 'react'
import { useParams } from 'react-router'

const ProductPage: FC = () => {
  const { id } = useParams()
  return (
    <div className={''}>
      <div>Product {id}</div>
    </div>
  )
}
export default ProductPage
