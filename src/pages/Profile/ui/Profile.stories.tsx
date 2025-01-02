import Profile from './Profile'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'pages/Profile',
  component: Profile,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {},
}
