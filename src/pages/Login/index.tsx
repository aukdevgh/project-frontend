import { Suspense } from 'react'

import { LoginLazy } from './ui/Login.lazy'

const withSuspenseLogin = () => {
  return (
    <Suspense>
      <LoginLazy />
    </Suspense>
  )
}

export { withSuspenseLogin as Login }
