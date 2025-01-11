export interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface ReaviewResponse {
  reviews: Review[]
  total: number
  hasMore: boolean
}

export interface ReaviewRequestArg {
  limit?: number
  offset?: number
  productId?: string
}
