# @romanbakurov/vellira-assets

Shared static assets for the Vellira Design System.

This package contains reusable assets shared across the Vellira ecosystem, including application fonts, documentation assets, Storybook assets, and future design tooling assets.

## Installation

```bash
pnpm add @romanbakurov/vellira-assets
```

## Font Styles

Import the bundled font stylesheet:

```ts
import '@romanbakurov/vellira-assets/styles';
```

or directly:

```ts
import '@romanbakurov/vellira-assets/styles/fonts.scss';
```

## Font Files

Font files are available through the package exports:

```scss
src: url('@romanbakurov/vellira-assets/fonts/KantumruyPro-Regular.ttf')
  format('truetype');
```

Available font files:

- `KantumruyPro-ExtraLight.ttf`
- `KantumruyPro-Regular.ttf`
- `KantumruyPro-Medium.ttf`
- `KantumruyPro-SemiBold.ttf`

## Package Structure

```
fonts/
styles/
```

## Roadmap

This package is intended to become the shared home for static assets used across the Vellira ecosystem, including:

- Fonts
- Documentation assets
- Storybook assets
- Future shared media resources

## License

MIT
