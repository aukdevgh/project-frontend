import { Product } from '@entities/Product'

export interface SearchResponseType {
  products: Product[]
}

export interface SearchRequestArgs {
  searchQuery: string
}
