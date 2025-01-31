import CartPage from './CartPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'pages/CartPage',
  component: CartPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CartPage>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {},
}
