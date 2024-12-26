import { Topbar } from './Topbar'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'widgets/Topbar',
  component: Topbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Topbar>

export default meta
type Story = StoryObj<typeof meta>

export const desctop: Story = {
  args: {},
  parameters: {
    viewport: { defaultViewport: 'desctop' },
  },
}
export const tablet: Story = {
  args: {},
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
}
