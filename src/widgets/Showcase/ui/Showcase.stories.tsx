import { getRouteNew } from '@shared/lib/routes'
import { AppLink } from '@shared/ui'

import { Showcase } from './Showcase'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'widgets/Showcase',
  component: Showcase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { title: 'new arrivals', sortBy: 'new', limit: 4 },
} satisfies Meta<typeof Showcase>

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
  decorators: [
    (Story) => (
      <div style={{ width: '480px', overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
}

export const with_children: Story = {
  args: {
    children: (
      <AppLink to={getRouteNew()} variant="outline">
        see all
      </AppLink>
    ),
  },
}
