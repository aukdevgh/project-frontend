import { Suspense } from 'react'

import { ProductsLazy } from './ui/Products.lazy'

const withSuspenseProducts = () => {
  return (
    <Suspense>
      <ProductsLazy />
    </Suspense>
  )
}

export { withSuspenseProducts as Products }
