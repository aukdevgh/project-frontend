import MainPage from './MainPage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const normal: Story = {
  globals: {},
  args: {},
}
