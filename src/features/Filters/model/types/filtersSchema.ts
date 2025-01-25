export interface FiltersSchema {
  minPrice: number
  maxPrice: number
  selectedRange: { min: number; max: number }
  category?: string
  sizes?: string[]
  colors?: string[]
}
