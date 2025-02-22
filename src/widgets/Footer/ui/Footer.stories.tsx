import { Footer } from './Footer'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'widgets/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {}
