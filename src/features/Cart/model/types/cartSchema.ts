export interface CartItem {
  id: string
  name: string
  price: number
  discountPercentage: number
  category: string
  quantity: number
  image: string
  size: string
  color: string
}

export interface CartSchema {
  items: CartItem[]
}

export interface RequestArgs {
  id: string
  size: string
  color: string
  quantity: number
}
