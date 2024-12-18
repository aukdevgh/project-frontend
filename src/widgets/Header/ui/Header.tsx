import { FC } from 'react'
import { Link } from 'react-router'

import { getRouteMain, getRouteProducts } from '@shared/lib/routes'

export const Header: FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={getRouteMain()}>Main</Link>
          </li>
          <li>
            <Link to={getRouteProducts()}>Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
