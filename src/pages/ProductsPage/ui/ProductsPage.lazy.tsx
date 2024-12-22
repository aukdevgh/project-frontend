import { lazy } from 'react'

export const ProductsPageLazy = lazy(
  () =>
    // for dev
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => resolve(import('./ProductsPage')), 1500)
    })
)
