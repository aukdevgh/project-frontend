import { Suspense } from 'react'

import { NotFoundPageLazy } from './ui/NotFoundPage.lazy'

const withSuspenseNotFoundPage = () => {
  return (
    <Suspense>
      <NotFoundPageLazy />
    </Suspense>
  )
}

export { withSuspenseNotFoundPage as NotFoundPage }
