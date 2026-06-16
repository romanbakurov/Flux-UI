# Flux UI

Modern cross-platform Design System for React and React Native.

Flux UI is a TypeScript-first component library built around a shared architecture, design tokens, and reusable primitives for Web and Native applications.

---

## Features

* React 19
* React Native 0.81+
* TypeScript First
* Design Tokens Architecture
* Shared Core Logic
* Shared Type System
* Cross-platform Icon System
* Storybook for Web
* Storybook for React Native
* Accessibility Focused
* Semantic Release
* GitHub Actions CI/CD
* Monorepo powered by pnpm

---

## Live Storybook

[Storybook Demo](https://6a07269cf7126a71ef2f62ca-byvnojtjdx.chromatic.com)

---

## Packages

| Package                        | Description                    |
| ------------------------------ | ------------------------------ |
| `@romanbakurov/flux-ui-web`    | React Web Components           |
| `@romanbakurov/flux-ui-native` | React Native Components        |
| `@romanbakurov/flux-ui-core`   | Shared Hooks and State Logic   |
| `@romanbakurov/flux-ui-types`  | Shared Type Definitions        |
| `@romanbakurov/flux-ui-icons`  | Cross-platform SVG Icon System |
| `@romanbakurov/flux-ui-tokens` | Design Tokens                  |

---

## Architecture

```text
apps/
├── storybook
├── native-playground
└── test-app

packages/
├── flux-ui-web
├── flux-ui-native
├── flux-ui-core
├── flux-ui-types
├── flux-ui-icons
└── flux-ui-tokens
```

---

## Installation

### Web

```bash
pnpm add @romanbakurov/flux-ui-web
```

### React Native

```bash
pnpm add @romanbakurov/flux-ui-native
```

### Design Tokens

```bash
pnpm add @romanbakurov/flux-ui-tokens
```

---

## Web Example

```tsx
import {
  Button,
  Input,
  Checkbox,
} from '@romanbakurov/flux-ui-web';

export function App() {
  return (
    <>
      <Input label="Email" />

      <Checkbox
        label="Accept terms"
        defaultChecked
      />

      <Button>
        Submit
      </Button>
    </>
  );
}
```

---

## React Native Example

```tsx
import {
  Button,
  Checkbox,
} from '@romanbakurov/flux-ui-native';

export default function App() {
  return (
    <>
      <Checkbox
        label="Accept terms"
      />

      <Button>
        Continue
      </Button>
    </>
  );
}
```

---

## Design Tokens

Flux UI uses a single source of truth for:

* Colors
* Typography
* Spacing
* Radius
* Shadows
* Z-Index

Tokens are distributed as:

* TypeScript objects
* CSS Variables
* React Native theme objects

---

## Components

### Primitives

* Button
* Input
* Checkbox

### Components

* Dropdown
* Modal
* RadioGroup
* Select
* Tabs
* Tooltip

### Patterns

* FormField

---

## Core Hooks

* useControllableState
* useDropdown
* useModal
* useTabs

---

## Development

Install dependencies:

```bash
pnpm install
```

Run Storybook:

```bash
pnpm --filter @flux-ui/storybook dev
```

Run Native Playground:

```bash
pnpm --filter native-playground start
```

Run Tests:

```bash
pnpm test
```

Run Lint:

```bash
pnpm lint
```

Build Everything:

```bash
pnpm -r build
```

---

## Quality

Current project checks:

* ESLint
* TypeScript
* Vitest
* Storybook
* GitHub Actions
* Semantic Release
* Package Validation

---

## Roadmap

### Completed

* Web Design System
* Native Design System Foundation
* Design Tokens
* Shared Core Hooks
* Shared Types
* Icon Generator
* Storybook Web
* Storybook Native
* Automated Releases

### Planned

* Dark Theme
* Theme Switching
* Data Display Components
* Toast System
* Date Components
* Full Accessibility Audit
* Documentation Website

---

## License

MIT © Roman Bakurov
