import { Search } from './Search'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'features/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {},

  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
}
