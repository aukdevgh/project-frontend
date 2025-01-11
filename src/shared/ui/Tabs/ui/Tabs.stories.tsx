import { Tab, Tabs } from './Tabs'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const tabs: Tab[] = [
  {
    label: 'Product Details',
    content: (
      <div>
        <h2>Essence Mascara Lash Princess</h2>
        <p>
          The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.
          Achieve dramatic lashes with this long-lasting and cruelty-free formula.
        </p>
        <ul>
          <li>Category: Beauty</li>
          <li>Price: $9.99</li>
          <li>Discount: 7.17%</li>
          <li>Brand: Essence</li>
          <li>SKU: RCH45Q1A</li>
          <li>Weight: 2g</li>
          <li>Dimensions: 23.17 x 14.43 x 28.01 cm</li>
          <li>Warranty: 1 month</li>
          <li>Shipping: Ships in 1 month</li>
          <li>Availability: Low Stock</li>
        </ul>
      </div>
    ),
  },
  {
    label: 'Rating & Reviews',
    content: (
      <div>
        <h2>Reviews</h2>
        <ul>
          <li>
            <strong>John Doe:</strong> Very unhappy with my purchase!
          </li>
          <li>
            <strong>Nolan Gonzalez:</strong> Not as described!
          </li>
          <li>
            <strong>Scarlett Wright:</strong> Very satisfied!
          </li>
        </ul>
        <p>Overall Rating: 4.94</p>
      </div>
    ),
  },
  {
    label: 'FAQs',
    content: (
      <div>
        <h2>FAQs</h2>
        <ul>
          <li>Return Policy: 30 days return policy</li>
          <li>Minimum Order Quantity: 24</li>
        </ul>
      </div>
    ),
  },
]

export const primary: Story = {
  args: { tabs: tabs },
}
