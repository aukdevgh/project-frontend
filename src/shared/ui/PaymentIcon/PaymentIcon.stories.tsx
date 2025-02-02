import { PaymentIcon } from './PaymentIcon'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/PaymentIcon',
  component: PaymentIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentIcon>

export default meta
type Story = StoryObj<typeof meta>

export const apple_pay: Story = {
  args: { type: 'ApplePay', size: 'big' },
}
export const google_pay: Story = {
  args: { type: 'GooglePay', size: 'big' },
}
export const master_card: Story = {
  args: { type: 'MasterCard', size: 'big' },
}
export const pay_pal: Story = {
  args: { type: 'PayPal', size: 'big' },
}

export const visa: Story = {
  args: { type: 'Visa', size: 'big' },
}

export const big: Story = {
  args: { type: 'Visa', size: 'big' },
}

export const small: Story = {
  args: { type: 'ApplePay', size: 'small' },
}
