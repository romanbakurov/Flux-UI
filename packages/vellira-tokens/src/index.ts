import { darkTheme } from './dark/theme.js';
import { highContrastTheme } from './highContrast/theme.js';
import { lightTheme } from './light/theme.js';

export { darkTheme, highContrastTheme, lightTheme };

export type {
  BaseCssVariableName,
  BaseTokenPath,
  ColorTokenPath,
  ComponentTokenPath,
  CssVariableName,
  SemanticTokenPath,
  ThemeCssVariableName,
  ThemeName,
  TokenPath,
} from './generated/token-types.js';
export {
  baseCssVariableNames,
  baseTokenPaths,
  colorTokenPaths,
  componentTokenPaths,
  cssVariableNames,
  semanticTokenPaths,
  themeCssVariableNames,
  themeNames,
  tokenPaths,
} from './generated/token-types.js';
export { overlay } from './semantic/overlay.js';

type WidenTokenValues<T> = {
  readonly [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends number
      ? number
      : T[K] extends boolean
        ? boolean
        : T[K] extends object
          ? WidenTokenValues<T[K]>
          : T[K];
};

export type VelliraTheme = WidenTokenValues<typeof lightTheme>;

export const theme = {
  semantic: darkTheme.semantic,
  components: darkTheme.components,
  tokens: darkTheme.tokens,
} as const;
