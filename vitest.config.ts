import { fileURLToPath } from 'node:url'
import { defineConfig, mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [tsconfigPaths()],
    test: {
      globals: true,
      mockReset: true,
      environment: 'jsdom',
      include: ['src/**/?(*.)+(spec|test).[jt]s?(x)'],
      deps: {
        inline: ['@vue', 'vue-router']
      },
      coverage: {
        provider: 'v8',
        reporter: ['lcov'],
        reportsDirectory: './test-reports/coverage',
        include: ['src/**/*'],
        exclude: []
      },
      exclude: [...configDefaults.exclude],
      root: fileURLToPath(new URL('./', import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/]
      }
    }
  })
)
