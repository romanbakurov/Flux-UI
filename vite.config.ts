/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
      '@shared': path.resolve(dirname, './src/shared'),
      '@web': path.resolve(dirname, './src/ui-web'),
      '@native': path.resolve(dirname, './src/ui-native'),
      '@assets': path.resolve(dirname, './src/shared/assets'),
      '@utils': path.resolve(dirname, './src/shared/utils'),
      '@hooks': path.resolve(dirname, './src/shared/hooks'),
      '@theme': path.resolve(dirname, './src/shared/theme'),
      '@types': path.resolve(dirname, './src/shared/types'),
    },
  },

  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MyUiKit',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },

  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          globals: true,
          environment: 'jsdom',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
        },
      },
    ],
  },
});
