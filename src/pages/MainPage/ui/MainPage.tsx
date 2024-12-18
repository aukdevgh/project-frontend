import { FC } from 'react'
import { Link } from 'react-router'

import { getRouteProducts } from '../../../routes'

const MainPage: FC = () => {
  return (
    <div className={''}>
      <h1>Main Page</h1>

      <nav>
        <Link to={getRouteProducts()}>Products</Link>
      </nav>
    </div>
  )
}
export default MainPage
