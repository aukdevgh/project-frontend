import svgr from 'vite-plugin-svgr'

import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    // Добавляем поддержку SVG с помощью vite-plugin-svgr
    config.plugins?.push(
      svgr({
        include: '**/*.svg',
      })
    )
    return config
  },
}
export default config
