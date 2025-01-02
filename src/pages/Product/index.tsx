import { Suspense } from 'react'

import { ProductLazy } from './ui/Product.lazy'

const withSuspenseProduct = () => {
  return (
    <Suspense>
      <ProductLazy />
    </Suspense>
  )
}

export { withSuspenseProduct as Product }
