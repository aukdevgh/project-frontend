import { AppImage } from './AppImage'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/AppImage',
  component: AppImage,
  parameters: {
    layout: 'centered',
    viewport: {},
  },

  tags: ['autodocs'],
} satisfies Meta<typeof AppImage>

export default meta
type Story = StoryObj<typeof meta>

const mockImgData = {
  src: '/test/test.png',
  sources: [
    { srcSet: '/test/test.avif', media: '(max-width: 480px)', type: 'image/avif' },
    { srcSet: '/test/test.webp', media: '(max-width: 768px)', type: 'image/webp' },
  ],
  alt: 'test image',
  width: 295,
  height: 298,
}

export const desctop: Story = {
  args: mockImgData,
  parameters: {
    viewport: { defaultViewport: 'desctop' },
  },
}
export const tablet: Story = {
  args: mockImgData,
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
}
export const mobile: Story = {
  args: mockImgData,
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
