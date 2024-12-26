import { Header } from './Header'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'widgets/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

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
export const mobile: Story = {
  args: {},
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
}
