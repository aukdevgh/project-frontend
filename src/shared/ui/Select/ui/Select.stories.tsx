import { fn } from '@storybook/test'

import { SORT_OPTIONS } from '@features/SortOrder/consts/consts'

import { Select } from './Select'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    options: SORT_OPTIONS,
    value: SORT_OPTIONS[0].value,
    onChange: fn(),
    placeholder: 'placeholder',
  },
}
