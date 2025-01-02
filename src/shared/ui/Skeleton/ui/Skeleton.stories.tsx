import { Skeleton } from './Skeleton'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    width: 500,
    height: 500,
    border: '16px',
  },
}
