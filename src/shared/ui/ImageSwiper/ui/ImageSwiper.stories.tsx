import { ImageSwiper } from './ImageSwiper'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/ImageSwiper',
  component: ImageSwiper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImageSwiper>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    images: [
      'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png',
      'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png',
      'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png',
    ],
  },
}
