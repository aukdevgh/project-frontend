import Checkout from './Checkout'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Checkout',
  component: Checkout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkout>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {},
}
