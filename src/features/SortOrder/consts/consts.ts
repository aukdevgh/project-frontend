import { Option } from '@shared/types/select'

import { sortOrderSchema } from '../model/types/sortOrderSchema'

export const SORT_ORDER_MAP: Record<string, sortOrderSchema> = {
  popular: { sortBy: 'popular', order: 'desc' },
  new: { sortBy: 'new', order: 'desc' },
  sale: { sortBy: 'sale', order: 'desc' },
  rating: { sortBy: 'rating', order: 'desc' },
  priceAsc: { sortBy: 'price', order: 'asc' },
  priceDesc: { sortBy: 'price', order: 'desc' },
}

export const SORT_OPTIONS: Option[] = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'new', label: 'New' },
  { value: 'sale', label: 'Discount' },
  { value: 'rating', label: 'Rating' },
  { value: 'priceAsc', label: 'Price: Low to High' },
  { value: 'priceDesc', label: 'Price: High to Low' },
]
