import { Suspense } from 'react'

import { BaseLayoutLazy } from './baseLayout/BaseLayout.lazy'
import { WithBreadcrumbLayoutLazy } from './withBreadcrumb/WithBreadcrumbLayout.lazy'

const withSuspenseBaseLayout = () => {
  return (
    <Suspense>
      <BaseLayoutLazy />
    </Suspense>
  )
}

const withSuspenseWithBreadcrumbLayout = () => {
  return (
    <Suspense>
      <WithBreadcrumbLayoutLazy />
    </Suspense>
  )
}

export { withSuspenseBaseLayout as BaseLayout }
export { withSuspenseWithBreadcrumbLayout as WithBreadcrumbLayout }
