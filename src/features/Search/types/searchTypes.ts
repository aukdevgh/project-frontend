export interface SearchItem {
  id: number
  title: string
}

export interface SearchResponseType {
  products: SearchItem[]
}

export interface SearchRequestArgs {
  searchQuery: string
}
