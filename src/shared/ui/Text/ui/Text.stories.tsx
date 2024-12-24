import { Text } from './Text'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const regular: Story = {
  args: { weight: 'regular', children: 'regular' },
}

export const medium: Story = {
  args: { weight: 'medium', children: 'medium' },
}

export const bold: Story = {
  args: { weight: 'bold', children: 'bold' },
}

export const size_s: Story = {
  args: { size: 's', children: 'size s' },
}

export const size_l: Story = {
  args: { size: 'l', children: 'size l' },
}

export const uppercase: Story = {
  args: { transform: 'uppercase', children: 'text uppercase' },
}

export const capitalize: Story = {
  args: { transform: 'capitalize', children: 'text capitalize' },
}

export const lowercase: Story = {
  args: { transform: 'lowercase', children: 'text lowercase' },
}
