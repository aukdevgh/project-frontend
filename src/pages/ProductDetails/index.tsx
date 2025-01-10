import { Suspense } from 'react'

import { ProductDetailsLazy } from './ui/ProductDetails.lazy'

const withSuspenseProductDetails = () => {
  return (
    <Suspense>
      <ProductDetailsLazy />
    </Suspense>
  )
}

export { withSuspenseProductDetails as ProductDetails }
