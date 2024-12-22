import { lazy, Suspense } from 'react'

const MainPageLazy = lazy(
  () =>
    // for dev
    new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => resolve(import('./MainPage')), 1500)
    })
)

export const withSuspenseMainPage = () => {
  return (
    <Suspense>
      <MainPageLazy />
    </Suspense>
  )
}
