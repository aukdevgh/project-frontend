import { Suspense } from 'react'

import { CartLazy } from './ui/Cart.lazy'

const withSuspenseCart = () => {
  return (
    <Suspense>
      <CartLazy />
    </Suspense>
  )
}

export { withSuspenseCart as Cart }
