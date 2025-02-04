import { type CartItem } from '@entities/Cart'

export interface Order {
  id: string
  cartItems: CartItem[]
  paymentMethod: string
  shippingAddress: string
  status: string
  totalPrice: number
  createdAt: string
  updatedAt: string
}

export interface OrderSchema {
  orders: Order[]
  hasLoaded: boolean
}
