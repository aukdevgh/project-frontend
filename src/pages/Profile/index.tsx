import { Suspense } from 'react'

import { ProfileLazy } from './ui/Profile.lazy'

const withSuspenseProfile = () => {
  return (
    <Suspense>
      <ProfileLazy />
    </Suspense>
  )
}

export { withSuspenseProfile as Profile }
