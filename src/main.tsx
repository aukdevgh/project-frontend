import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import './index.css'
import { App } from './App.tsx'
import { AppRouter } from './routes/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <AppRouter />
      </App>
    </BrowserRouter>
  </StrictMode>
)
