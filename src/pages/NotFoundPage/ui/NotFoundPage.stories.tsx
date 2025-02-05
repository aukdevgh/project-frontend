import NotFoundPage from './NotFoundPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {},
}
