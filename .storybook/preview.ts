import { RouterDecorator, StoreDecorator } from '../src/app/providers/storybook'

import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [RouterDecorator, StoreDecorator],
}

export default preview
