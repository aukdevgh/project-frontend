import { Suspense } from 'react'

import { HomeLazy } from './ui/Home.lazy'

const withSuspenseHome = () => {
  return (
    <Suspense>
      <HomeLazy />
    </Suspense>
  )
}

export { withSuspenseHome as Home }
