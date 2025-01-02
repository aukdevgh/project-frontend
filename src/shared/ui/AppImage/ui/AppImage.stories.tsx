import { AppImage } from './AppImage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/AppImage',
  component: AppImage,
  parameters: {
    layout: 'centered',
    viewport: {},
  },
  args: {
    src: '/test/test.png',
    sources: [
      { srcSet: '/test/test.avif', media: '(max-width: 480px)', type: 'image/avif' },
      { srcSet: '/test/test.webp', media: '(max-width: 768px)', type: 'image/webp' },
    ],
    alt: 'test image',
    width: 295,
    height: 298,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppImage>

export default meta
type Story = StoryObj<typeof meta>

export const desctop: Story = {
  parameters: {
    viewport: { defaultViewport: 'desctop' },
  },
}
export const tablet: Story = {
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
}
export const mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
}

export const error: Story = {
  args: {
    src: '/test',
    alt: 'some image',
    width: 295,
    height: 298,
  },
}
