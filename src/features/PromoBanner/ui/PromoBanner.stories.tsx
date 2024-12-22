import { PromoBanner } from './PromoBanner'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'features/PromoBanner',
  component: PromoBanner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PromoBanner>

export default meta
type Story = StoryObj<typeof meta>

export const normal: Story = {
  globals: {},
  args: {},
}
