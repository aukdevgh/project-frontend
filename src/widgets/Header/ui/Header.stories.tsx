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
  parameters: {
    viewport: { defaultViewport: 'desctop' },
  },
}
export const tablet: Story = {
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
}
export const mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
}
