import { Suspense } from 'react'

import { MainPageLazy } from './ui/MainPage.lazy'

const withSuspenseMainPage = () => {
  return (
    <Suspense>
      <MainPageLazy />
    </Suspense>
  )
}

export { withSuspenseMainPage as MainPage }
