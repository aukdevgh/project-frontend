import { Suspense } from 'react'

import { ProductPageLazy } from './ui/ProductPage.lazy'

const withSuspenseProductPage = () => {
  return (
    <Suspense>
      <ProductPageLazy />
    </Suspense>
  )
}

export { withSuspenseProductPage as ProductPage }
