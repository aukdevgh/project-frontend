import { Breadcrumbs } from './Breadcrumbs'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'features/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  globals: {},
  args: {},
}
