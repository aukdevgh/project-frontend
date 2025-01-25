import { useEffect } from 'react'

import { useFiltersActions, useGetPriceRangeQuery } from '@features/Filters'

import { AppRouterProvider } from './providers/router/AppRouterProvider'

import '@shared/styles/main.scss'

export const AppEntry = () => {
  const { data } = useGetPriceRangeQuery()
  const { setLimits } = useFiltersActions()

  useEffect(() => {
    if (data) {
      setLimits({ min: data.min, max: data.max })
    }
  }, [data, setLimits])

  return <AppRouterProvider />
}
