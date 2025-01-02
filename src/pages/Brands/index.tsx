import { Suspense } from 'react'

import { BrandsLazy } from './ui/Brands.lazy'

const withSuspenseBrands = () => {
  return (
    <Suspense>
      <BrandsLazy />
    </Suspense>
  )
}

export { withSuspenseBrands as Brands }
