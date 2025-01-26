import { fn } from '@storybook/test'

import { Pagination } from './Pagination'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const desktop: Story = {
  args: { totalItems: 50, currentPage: 1, itemsPerPage: 9, onPageChange: fn },
}
export const mobile: Story = {
  args: { totalItems: 50, currentPage: 1, itemsPerPage: 9, onPageChange: fn },
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
}
