import { ProductCard } from './ProductCard'
import { Product } from '../../types'

import type { Meta, StoryObj } from '@storybook/react'

const mockProduct: Product = {
  id: '1',
  name: 'T-SHIRT WITH TAPE DETAILS',
  price: 160,
  discountPercentage: 30,
  rating: 4.8,
  thumbnail: '/test/test.png',
  brand: 'Lock',
  category: 'mens-shirt',
}
const mockProduct2: Product = {
  id: '1',
  name: 'T-SHIRT WITH TAPE DETAILS',
  price: 160,
  discountPercentage: 0,
  rating: 4.8,
  thumbnail: '/test/test.png',
  brand: 'Lock',
  category: 'mens-shirt',
}

const meta = {
  title: 'entities/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const with_discount: Story = {
  args: { product: mockProduct },
}

export const without_discount: Story = {
  args: { product: mockProduct2 },
}
