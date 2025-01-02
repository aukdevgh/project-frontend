import Home from './Home'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {},
}
