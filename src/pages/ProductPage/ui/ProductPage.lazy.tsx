import { lazy, Suspense } from 'react'

const ProductPageLazy = lazy(
  () =>
    // for dev
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => resolve(import('./ProductPage')), 1500)
    })
)

export const withSuspenseProductPage = () => {
  return (
    <Suspense>
      <ProductPageLazy />
    </Suspense>
  )
}
