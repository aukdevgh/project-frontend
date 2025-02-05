import { useEffect } from 'react'

import { useAuthActions, useCheckAuthQuery } from '@features/Auth'
import { useFiltersActions, useGetPriceRangeQuery } from '@features/Filters'

import { ErrorBoundary } from '@shared/ui'

import { AppRouterProvider } from './providers/router/AppRouterProvider'

import '@shared/styles/main.scss'

export const AppEntry = () => {
  const { data: priceData } = useGetPriceRangeQuery()
  const { setLimits } = useFiltersActions()

  const { isSuccess } = useCheckAuthQuery()
  const { setIsAuth } = useAuthActions()

  useEffect(() => {
    if (priceData) {
      setLimits({ min: priceData.min, max: priceData.max })
    }
  }, [priceData, setLimits])

  useEffect(() => {
    setIsAuth(isSuccess)
  }, [isSuccess, setIsAuth])

  return (
    <ErrorBoundary>
      <AppRouterProvider />
    </ErrorBoundary>
  )
}
