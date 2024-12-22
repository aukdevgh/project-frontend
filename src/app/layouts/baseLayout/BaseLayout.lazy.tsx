import { lazy, Suspense } from 'react'

const BaseLayoutLazy = lazy(() => import('./BaseLayout'))

export const withSuspenseBaseLayout = () => {
  return (
    <Suspense>
      <BaseLayoutLazy />
    </Suspense>
  )
}
