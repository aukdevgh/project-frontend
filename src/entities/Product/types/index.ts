export interface Product {
  id: number
  title: string
  description: string
  brand: string
  price: number
  discountPercentage: number
  rating: number
  thumbnail: string
  images: string[]
}

export interface ProductDetails extends Product {
  category: string
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

export interface GetProductsResponse {
  products: Product[]
}

export interface GetProductsByCategoryRequest {
  category: string
}

export type GetCategoryList = string[]
