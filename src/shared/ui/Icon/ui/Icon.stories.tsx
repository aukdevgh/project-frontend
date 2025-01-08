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

export const arrow_right: Story = {
  globals: {},
  args: { type: 'ArrowRight' },
}

export const close: Story = {
  globals: {},
  args: { type: 'Close' },
}

export const search: Story = {
  globals: {},
  args: { type: 'Search' },
}

export const cart: Story = {
  globals: {},
  args: { type: 'Cart' },
}

export const profile: Story = {
  globals: {},
  args: { type: 'Profile' },
}

export const logo: Story = {
  globals: {},
  args: { type: 'Logo' },
}

export const burger: Story = {
  globals: {},
  args: { type: 'Burger' },
}

export const star: Story = {
  globals: {},
  args: { type: 'Star' },
}

export const hald_star: Story = {
  globals: {},
  args: { type: 'HalfStar' },
}

export const diamond: Story = {
  globals: {},
  args: { type: 'Diamond' },
}

export const versace: Story = {
  globals: {},
  args: { type: 'Versace', width: '100%', height: 'auto' },
}

export const zara: Story = {
  globals: {},
  args: { type: 'Zara', width: '100%', height: 'auto' },
}

export const gucci: Story = {
  globals: {},
  args: { type: 'Gucci', width: '100%', height: 'auto' },
}

export const calvinKlein: Story = {
  globals: {},
  args: { type: 'CalvinKlein', width: '100%', height: 'auto' },
}

export const prada: Story = {
  globals: {},
  args: { type: 'Prada', width: '100%', height: 'auto' },
}
