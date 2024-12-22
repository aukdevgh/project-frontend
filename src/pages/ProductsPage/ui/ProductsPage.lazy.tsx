import { lazy, Suspense } from 'react'

const ProductsPageLazy = lazy(
  () =>
    // for dev
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => resolve(import('./ProductsPage')), 1500)
    })
)

export const withSuspenseProductsPage = () => {
  return (
    <Suspense>
      <ProductsPageLazy />
    </Suspense>
  )
}
