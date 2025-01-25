import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AppEntry, StoreProvider } from './app'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <StoreProvider>
      <AppEntry />
    </StoreProvider>
  </StrictMode>
)
