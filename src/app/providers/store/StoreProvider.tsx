import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { makeStore } from '@app/store'

interface StoreProviderProps {
  children?: ReactNode
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = makeStore()

  return <Provider store={store}>{children}</Provider>
}
