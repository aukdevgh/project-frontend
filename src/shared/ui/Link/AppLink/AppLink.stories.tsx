import { AppLink } from './AppLink'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/Link/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const underline: Story = {
  globals: {},
  args: { to: '/', children: 'inderline', variant: 'underline' },
}

export const clear: Story = {
  globals: {},
  args: { to: '/', children: 'clear', variant: 'clear' },
}

export const outline: Story = {
  globals: {},
  args: { to: '/', children: 'outline', variant: 'outline' },
}
