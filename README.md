# Flux UI

Modern cross-platform Design System for React and React Native.

Flux UI is a TypeScript-first component library built around shared architecture, design tokens, reusable primitives, and platform-specific rendering for Web and Native applications.

![React](https://img.shields.io/badge/React-19-blue)
![React Native](https://img.shields.io/badge/React%20Native-0.81-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Storybook](https://img.shields.io/badge/Storybook-Live-ff4785)
![License](https://img.shields.io/github/license/romanbakurov/Flux-UI)

## Links

[Storybook Demo](https://main--6a07269cf7126a71ef2f62ca.chromatic.com)

[Chromatic Library](https://www.chromatic.com/library?appId=6a07269cf7126a71ef2f62ca&branch=main)

[GitHub Repository](https://github.com/romanbakurov/Flux-UI)

---

## Features

* React 19
* React Native 0.81+
* TypeScript First
* Shared Design Tokens
* Shared Core Logic
* Shared Type System
* Cross-platform Icon System
* Storybook Web
* Storybook Native
* Accessibility Focused
* Semantic Release
* GitHub Actions CI/CD
* pnpm Monorepo

---

## Packages

| Package                        | Description                |
| ------------------------------ | -------------------------- |
| `@romanbakurov/flux-ui-web`    | React Web Components       |
| `@romanbakurov/flux-ui-native` | React Native Components    |
| `@romanbakurov/flux-ui-core`   | Shared Hooks & State Logic |
| `@romanbakurov/flux-ui-types`  | Shared Type Definitions    |
| `@romanbakurov/flux-ui-icons`  | Cross-platform Icon System |
| `@romanbakurov/flux-ui-tokens` | Design Tokens              |

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

## Philosophy

Flux UI is built around a few core principles:

* Shared logic across platforms
* Shared design tokens
* Platform-specific rendering
* Accessibility by default
* Predictable APIs
* Type-safe development experience

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
  Checkbox,
  Input,
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

Single source of truth for:

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

## Component Support

| Component  | Web | Native |
| ---------- | --- | ------ |
| Button     | ✅   | ✅      |
| Checkbox   | ✅   | ✅      |
| Input      | ✅   | 🚧     |
| Dropdown   | ✅   | 🚧     |
| Modal      | ✅   | 🚧     |
| RadioGroup | ✅   | 🚧     |
| Select     | ✅   | 🚧     |
| Tabs       | ✅   | 🚧     |
| Tooltip    | ✅   | 🚧     |
| FormField  | ✅   | 🚧     |

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
* Cross-platform Icons
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
* Visual Regression Coverage
* Expanded Native Component Set

---

## License

MIT © Roman Bakurov
