import { ProductCard } from './ProductCard'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'entities/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { productId: 177 },
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {}

export const desctop: Story = {
  parameters: {
    viewport: { defaultViewport: 'desctop' },
  },
}
export const tablet: Story = {
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
}
export const mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
}
