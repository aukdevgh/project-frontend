import Login from './Login'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'pages/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {},
}
