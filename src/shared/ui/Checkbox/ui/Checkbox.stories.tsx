import { Checkbox } from './Checkbox'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const checkbox: Story = {
  args: {
    label: 'XL',
    type: 'checkbox',
  },
}
export const checkbox_checked: Story = {
  args: {
    label: 'XL',
    type: 'checkbox',
    checked: true,
  },
}
export const checkbox_checked_disabled: Story = {
  args: {
    label: 'XL',
    type: 'checkbox',
    checked: true,
    disabled: true,
  },
}

export const radio_button: Story = {
  args: {
    label: 'XL',
    type: 'radio',
  },
}
export const radio_button_checked: Story = {
  args: {
    label: 'XL',
    type: 'radio',
    checked: true,
  },
}
export const radio_button_checked_disabled: Story = {
  args: {
    label: 'XL',
    type: 'radio',
    checked: true,
    disabled: true,
  },
}

export const radio_button_red_bg: Story = {
  args: {
    label: 'red',
    type: 'radio',
    backgroundColor: 'red',
  },
}
