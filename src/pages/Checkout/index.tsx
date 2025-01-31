import { Suspense } from 'react'

import { CheckoutLazy } from './ui/Checkout.lazy'

const withSuspenseCheckout = () => {
  return (
    <Suspense>
      <CheckoutLazy />
    </Suspense>
  )
}

export { withSuspenseCheckout as Checkout }
