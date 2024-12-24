import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AppRouterProvider } from '@app/router'

import '@shared/styles/main.scss'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <AppRouterProvider />
  </StrictMode>
)
