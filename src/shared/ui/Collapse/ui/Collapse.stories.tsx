import { Collapse } from './Collapse'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shred/Collapse',
  component: Collapse,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapse>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: { title: 'Title', children: 'some content' },
}
