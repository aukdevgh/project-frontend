import Auth from './Auth'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'pages/Auth',
  component: Auth,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Auth>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {},
}
