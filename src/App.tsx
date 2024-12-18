import { ReactNode, FC } from 'react'
import { Link } from 'react-router'

import { getRouteMain, getRouteProducts } from './routes'
import './App.css'

interface AppProps {
  children: ReactNode
}

export const App: FC<AppProps> = ({ children }) => {
  return (
    <div className="app">
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

      <main>{children}</main>
    </div>
  )
}
