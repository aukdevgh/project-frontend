import { StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router'

import '@shared/styles/main.scss'

export const RouterDecorator = (Story: StoryFn) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Story />
      </div>
    </BrowserRouter>
  )
}
