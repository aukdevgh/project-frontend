import { ReactNode, FC } from 'react'

import { Header } from '@widgets/Header'

interface AppProps {
  children: ReactNode
}

export const App: FC<AppProps> = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
    </div>
  )
}
