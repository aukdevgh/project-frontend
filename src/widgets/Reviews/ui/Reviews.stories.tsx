import { Reviews } from './Reviews'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'widgets/Reviews',
  component: Reviews,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Reviews>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {}
