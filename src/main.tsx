import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AppRouterProvider } from '@app/providers/router/AppRouterProvider'
import { StoreProvider } from '@app/providers/store/StoreProvider'

import '@shared/styles/main.scss'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <StoreProvider>
      <AppRouterProvider />
    </StoreProvider>
  </StrictMode>
)
