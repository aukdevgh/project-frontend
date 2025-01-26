import { Button } from './Button'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  globals: {},
  args: {
    children: 'primary',
  },
}

export const primary_disabled: Story = {
  globals: {},
  args: {
    children: 'primary',
    disabled: true,
  },
}

export const secondary: Story = {
  globals: {},
  args: {
    variant: 'secondary',
    children: 'secondary',
  },
}

export const secondary_is_active: Story = {
  globals: {},
  args: {
    variant: 'secondary',
    isActive: true,
    children: 'secondary',
  },
}

export const outline: Story = {
  globals: {},
  args: {
    variant: 'outline',
    children: 'outline',
  },
}

export const icon_size_secondary: Story = {
  globals: {},
  args: {
    variant: 'secondary',
    size: 'icon',
    children: 'X',
  },
}

export const icon_size_clear: Story = {
  globals: {},
  args: {
    variant: 'clear',
    size: 'icon',
    children: 'X',
  },
}
