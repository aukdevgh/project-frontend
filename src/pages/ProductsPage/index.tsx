import { Suspense } from 'react'

import { ProductsPageLazy } from './ui/ProductsPage.lazy'

const withSuspenseProductsPage = () => {
  return (
    <Suspense>
      <ProductsPageLazy />
    </Suspense>
  )
}

export { withSuspenseProductsPage as ProductsPage }
