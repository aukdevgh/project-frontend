import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AppRouterProvider } from '@app/router'
import '@shared/styles/main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouterProvider />
  </StrictMode>
)
