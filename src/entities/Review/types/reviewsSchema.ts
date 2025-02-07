export interface Review {
  id: string
  username: string
  rating: number
  text: string
  createAt: string
}

export interface ReaviewResponse {
  reviews: Review[]
  total: number
  hasMore: boolean
}

export interface ReaviewRequestArg {
  limit?: number
  page?: number
  productId?: string
}

export interface AddReviewRequest {
  productId: string
  text: string
  rating: number
}
