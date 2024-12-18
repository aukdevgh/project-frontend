import { FC } from 'react'
import { Link } from 'react-router'

import { getRouteProductById } from '@shared/lib/routes'

const ProductsPage: FC = () => {
  return (
    <div className={''}>
      <h1>Products</h1>

      <ul>
        <li>
          <Link to={getRouteProductById('1')}>product 1</Link>
        </li>
        <li>
          <Link to={getRouteProductById('2')}>product 2</Link>
        </li>
      </ul>
    </div>
  )
}

export default ProductsPage
