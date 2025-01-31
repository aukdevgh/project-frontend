import { Suspense } from 'react'

import { CartPageLazy } from './ui/CartPage.lazy'

const withSuspenseCartPage = () => {
  return (
    <Suspense>
      <CartPageLazy />
    </Suspense>
  )
}

export { withSuspenseCartPage as CartPage }
