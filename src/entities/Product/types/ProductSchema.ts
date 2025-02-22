export type SortBy = 'new' | 'sale' | 'popular' | 'price' | 'rating'
export type SortDirection = 'desc' | 'asc'

export interface Product {
  id: string
  name: string
  brand: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  thumbnail: string
}

export interface ProductDetails extends Product {
  colors: string[]
  sizes: string[]
  images: string[]
  slug: string
  stock: number
  sku: string
  material: string
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  returnPolicy: string
  minimumOrderQuantity: number
  meta: {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  }
}

export interface ProductsQueryArgs {
  category?: string
  sortBy?: SortBy
  filterByBrand?: string
  sortDirection?: SortDirection
  minPrice?: number
  maxPrice?: number
  limit?: number
  page?: number
  select?: string[]
  colors?: string[]
  sizes?: string[]
}

export interface ProductsResponse {
  products: Product[]
  total: number
  hasMore: boolean
}
