import { Input } from './Input'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    variant: 'primary',
    addon: 's',
    placeholder: 'Search for products...',
  },
}

export const secondary: Story = {
  args: {
    variant: 'secondary',
    addon: 'e',
    placeholder: 'Enter your email address',
  },
}
