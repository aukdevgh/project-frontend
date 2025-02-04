import { Icon } from './Icon'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const arrow_down: Story = {
  args: { type: 'ArrowDown', width: '100%', height: '60px' },
}

export const arrow_right: Story = {
  args: { type: 'ArrowRight', width: '100%', height: '60px' },
}

export const arrow_left: Story = {
  args: { type: 'ArrowLeft', width: '100%', height: '60px' },
}

export const close: Story = {
  args: { type: 'Close', width: '100%', height: '60px' },
}

export const search: Story = {
  args: { type: 'Search', width: '100%', height: '60px' },
}

export const cart: Story = {
  args: { type: 'Cart', width: '100%', height: '60px' },
}

export const profile: Story = {
  args: { type: 'Profile', width: '100%', height: '60px' },
}

export const logo: Story = {
  args: { type: 'Logo', width: '100%', height: '60px' },
}

export const burger: Story = {
  args: { type: 'Burger', width: '100%', height: '60px' },
}

export const star: Story = {
  args: { type: 'Star', width: '100%', height: '60px' },
}

export const hald_star: Story = {
  args: { type: 'HalfStar', width: '100%', height: '60px' },
}

export const diamond: Story = {
  args: { type: 'Diamond', width: '100%', height: '60px' },
}

export const versace: Story = {
  args: { type: 'Versace', width: '100%', height: '60px' },
}

export const zara: Story = {
  args: { type: 'Zara', width: '100%', height: '60px' },
}

export const gucci: Story = {
  args: { type: 'Gucci', width: '100%', height: '60px' },
}

export const calvinKlein: Story = {
  args: { type: 'CalvinKlein', width: '100%', height: '60px' },
}

export const prada: Story = {
  args: { type: 'Prada', width: '100%', height: '60px' },
}

export const xcom: Story = {
  args: { type: 'XCOM', width: '100%', height: '60px' },
}

export const facebook: Story = {
  args: { type: 'Facebook', width: '100%', height: '60px' },
}

export const instagram: Story = {
  args: { type: 'Instagram', width: '100%', height: '60px' },
}

export const github: Story = {
  args: { type: 'Github', width: '100%', height: '60px' },
}

export const email: Story = {
  args: { type: 'Email', width: '100%', height: '60px' },
}

export const plus: Story = {
  args: { type: 'Plus', width: '100%', height: '60px' },
}

export const minus: Story = {
  args: { type: 'Minus', width: '100%', height: '60px' },
}

export const filter: Story = {
  args: { type: 'Filter', width: '100%', height: '60px' },
}

export const check_marker: Story = {
  args: { type: 'CheckMarker', width: '100%', height: '60px' },
}

export const radio_marker: Story = {
  args: { type: 'RadioMarker', width: '100%', height: '60px' },
}

export const home: Story = {
  args: { type: 'Home', width: '100%', height: '60px' },
}

export const delete_icon: Story = {
  args: { type: 'Delete', width: '100%', height: '60px' },
}

export const promocode: Story = {
  args: { type: 'PromoCode', width: '100%', height: '60px' },
}

export const apple_pay: Story = {
  args: { type: 'ApplePay', width: '100%', height: '60px' },
}

export const google_pay: Story = {
  args: { type: 'GooglePay', width: '100%', height: '60px' },
}

export const master_card: Story = {
  args: { type: 'MasterCard', width: '100%', height: '60px' },
}

export const paypal: Story = {
  args: { type: 'PayPal', width: '100%', height: '60px' },
}

export const visa: Story = {
  args: { type: 'Visa', width: '100%', height: '60px' },
}
