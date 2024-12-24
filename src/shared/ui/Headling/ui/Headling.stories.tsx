import { Headling } from './Headling'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/Headling',
  component: Headling,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Headling>

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

export const subheading: Story = {
  args: { size: 'subheading', children: 'subheading' },
}

export const heading: Story = {
  args: { size: 'heading', children: 'heading' },
}

export const title_small: Story = {
  args: { size: 'title-small', children: 'title-small' },
}

export const title_medium: Story = {
  args: { size: 'title-medium', children: 'title-medium' },
}

export const title_large: Story = {
  args: { size: 'title-large', children: 'title-large' },
}

export const banner: Story = {
  args: { size: 'banner', children: 'banner' },
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
