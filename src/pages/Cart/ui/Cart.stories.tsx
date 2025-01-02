import Cart from './Cart'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'pages/Cart',
  component: Cart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cart>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {},
}
