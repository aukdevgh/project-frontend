import { lazy, Suspense } from 'react'

const WithBreadcrumbLayoutLazy = lazy(() => import('./WithBreadcrumbLayout'))

export const withSuspenseWithBreadcrumbLayout = () => {
  return (
    <Suspense>
      <WithBreadcrumbLayoutLazy />
    </Suspense>
  )
}
