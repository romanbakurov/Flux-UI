import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: false,
  clean: true,
  sourcemap: false,
  splitting: false,
  external: [
    'react',
    'react-native',
    '@react-native-picker/picker',
    '@romanbakurov/vellira-core',
    '@romanbakurov/vellira-icons',
    '@romanbakurov/vellira-tokens',
    '@romanbakurov/vellira-types',
  ],
});
