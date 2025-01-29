import { Suspense } from 'react'

import { AuthLazy } from './ui/Auth.lazy'

const withSuspenseAuth = () => {
  return (
    <Suspense>
      <AuthLazy />
    </Suspense>
  )
}

export { withSuspenseAuth as Auth }
