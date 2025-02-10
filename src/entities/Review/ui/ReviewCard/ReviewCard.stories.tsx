import { ReviewCard } from './ReviewCard'
import { Review } from '../../types/reviewsSchema'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'entities/ReviewCard',
  component: ReviewCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewCard>

export default meta
type Story = StoryObj<typeof meta>

const mockReview: Review = {
  id: 'noahid',
  username: 'Noah Johnson',
  rating: 5,
  text: "The quality of the fabrics and the modern designs at Shop.co are second to none. I'm a loyal customer for life.",
  createAt: '2024-12-28',
}

export const primary: Story = {
  args: { review: mockReview },
}

export const width_date: Story = {
  args: { review: mockReview, withDate: true },
}
