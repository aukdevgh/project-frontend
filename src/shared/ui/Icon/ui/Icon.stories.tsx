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
  args: { type: 'ArrowDown' },
}

export const arrow_right: Story = {
  args: { type: 'ArrowRight' },
}

export const arrow_left: Story = {
  args: { type: 'ArrowLeft' },
}

export const close: Story = {
  args: { type: 'Close' },
}

export const search: Story = {
  args: { type: 'Search' },
}

export const cart: Story = {
  args: { type: 'Cart' },
}

export const profile: Story = {
  args: { type: 'Profile' },
}

export const logo: Story = {
  args: { type: 'Logo' },
}

export const burger: Story = {
  args: { type: 'Burger' },
}

export const star: Story = {
  args: { type: 'Star' },
}

export const hald_star: Story = {
  args: { type: 'HalfStar' },
}

export const diamond: Story = {
  args: { type: 'Diamond' },
}

export const versace: Story = {
  args: { type: 'Versace', width: '100%', height: 'auto' },
}

export const zara: Story = {
  args: { type: 'Zara', width: '100%', height: 'auto' },
}

export const gucci: Story = {
  args: { type: 'Gucci', width: '100%', height: 'auto' },
}

export const calvinKlein: Story = {
  args: { type: 'CalvinKlein', width: '100%', height: 'auto' },
}

export const prada: Story = {
  args: { type: 'Prada', width: '100%', height: 'auto' },
}
