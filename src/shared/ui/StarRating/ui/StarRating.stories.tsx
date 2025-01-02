import { StarRating } from './StarRating'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/StarRating',
  component: StarRating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StarRating>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {},
}
export const readonly: Story = {
  args: {
    rating: 4.5,
    readonly: true,
  },
}
export const disabled: Story = {
  args: {
    rating: 4.5,
    disabled: true,
  },
}
