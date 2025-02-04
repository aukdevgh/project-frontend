import { Option } from '@shared/types/select'

import { sortSchema } from '../model/types/sortSchema'

export const SORT_MAP: Record<string, sortSchema> = {
  popular: { sortBy: 'popular', sortDirection: 'desc' },
  new: { sortBy: 'new', sortDirection: 'desc' },
  sale: { sortBy: 'sale', sortDirection: 'desc' },
  rating: { sortBy: 'rating', sortDirection: 'desc' },
  priceAsc: { sortBy: 'price', sortDirection: 'asc' },
  priceDesc: { sortBy: 'price', sortDirection: 'desc' },
}

export const SORT_OPTIONS: Option[] = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'new', label: 'New' },
  { value: 'sale', label: 'Discount' },
  { value: 'rating', label: 'Rating' },
  { value: 'priceAsc', label: 'Price: Low to High' },
  { value: 'priceDesc', label: 'Price: High to Low' },
]
