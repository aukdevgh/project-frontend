import { Suspense } from 'react'

import { CategoryLazy } from './ui/Category.lazy'

const withSuspenseCategory = () => {
  return (
    <Suspense>
      <CategoryLazy />
    </Suspense>
  )
}

export { withSuspenseCategory as Category }
