import { buildSelector } from '@shared/hooks/store'

export const [useGetSelectedPriceRange, getSelectedPriceRange] = buildSelector((state) => state.filters.selectedRange)
