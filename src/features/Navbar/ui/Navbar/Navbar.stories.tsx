import { Navbar } from './Navbar'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'features/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  globals: {},
  args: {},
}
