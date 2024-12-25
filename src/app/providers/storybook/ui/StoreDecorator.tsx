import { StoryFn } from '@storybook/react'

import { StoreProvider } from '../../store/StoreProvider'

export const StoreDecorator = (Story: StoryFn) => {
  return (
    <StoreProvider>
      <Story />
    </StoreProvider>
  )
}
