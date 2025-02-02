/// <reference path="./src/shared/types/vite-env.d.ts" />

import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5000,
  },
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
    }),
    sitemap({
      hostname: 'my-project-shop.co',
      readable: true,
      dynamicRoutes: [
        '/',
        '/cart',
        '/checkout',
        '/auth',
        '/profile',
        '/:catalog',
        '/:catalog/:category',
        '/:catalog/:category/:subcategory',
        '/:catalog/:category/:subcategory/:productId',
      ],
    }),
  ],

  assetsInclude: ['**/*.woff', '**/*.woff2'],

  resolve: {
    alias: {
      '@app': resolve(__dirname, 'src/app'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@widgets': resolve(__dirname, 'src/widgets'),
      '@features': resolve(__dirname, 'src/features'),
      '@entities': resolve(__dirname, 'src/entities'),
      '@shared': resolve(__dirname, 'src/shared'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `
          @use "@shared/styles/global.scss" as *;
        `,
      },
    },
    modules: {
      generateScopedName: '[name]__[local]-[hash:base64:5]',
      localsConvention: 'dashes',
      scopeBehaviour: 'local',
    },
  },

  test: {
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
    },

    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTest.ts',
  },
})
