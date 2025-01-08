import Category from './Category'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'pages/Category',
  component: Category,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Category>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {}
