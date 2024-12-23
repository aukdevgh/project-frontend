import { Dropdown } from './Dropdown'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'features/Navbar/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  globals: {},
  args: {},
}
