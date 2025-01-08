export type SortBy = 'new' | 'sale' | 'popular'
export type Order = 'desc' | 'asc'

export enum SortMap {
  new = 'id',
  sale = 'discountPercentage',
  popular = 'rating',
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  thumbnail: string
}

export interface ProductDetails extends Product {
  images: string[]
  category: string
  slug: string
  brand: string
  stock: number
  tags: string[]
  sku: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  }
}

export interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export interface ProductsQueryArgs {
  category?: string
  sortBy?: SortMap
  filterByBrand?: string
  order?: Order
  minPrice?: number
  maxPrice?: number
  limit?: number
  offset?: number
  select?: string[]
}

export interface ProductsResponse {
  products: Product[]
  total: number
  hasMore: boolean
}
