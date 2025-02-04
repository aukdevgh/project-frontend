export { useFiltersActions, filtersActions, filtersReducer } from './model/slice/filtersSlice'
export type { FiltersSchema } from './model/types/filtersSchema'

export { getCategory, useGetCategory } from './model/selectors/getCategory/getCategory'
export { getMaxPrice, useGetMaxPrice } from './model/selectors/getMaxPrice/getMaxPrice'
export { getMinPrice, useGetMinPrice } from './model/selectors/getMinPrice/getMinPrice'
export { getColors, useGetColors } from './model/selectors/getColors/getColors'
export { getSizes, useGetSizes } from './model/selectors/getSizes/getSizes'
export {
  getSelectedPriceRange,
  useGetSelectedPriceRange,
} from './model/selectors/getSelectedPriceRange/getSelectedPriceRange'

export { useGetPriceRangeQuery } from './api/filterApi'
export { Filters } from './ui/Filters'
