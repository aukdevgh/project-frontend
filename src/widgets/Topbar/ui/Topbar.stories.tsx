import { Topbar } from './Topbar'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'widgets/Topbar',
  component: Topbar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Topbar>

export default meta
type Story = StoryObj<typeof meta>

export const desctop: Story = {
  parameters: {
    viewport: { defaultViewport: 'desctop' },
  },
}
export const mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
}
