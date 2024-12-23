import { Icon } from './Icon'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const arrow_down: Story = {
  globals: {},
  args: { type: 'ArrowDown' },
}

export const close: Story = {
  globals: {},
  args: { type: 'Close' },
}
