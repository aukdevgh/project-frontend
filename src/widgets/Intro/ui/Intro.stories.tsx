import { Intro } from './Intro'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'widgets/Intro',
  component: Intro,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Intro>

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
