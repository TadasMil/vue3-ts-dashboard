# Vue 3 TypeScript WeHR Dashboard
## Features

- **CSS BEM**: This project follows the BEM (Block Element Modifier) methodology for CSS class naming.
- **Flat Project Structure**: The project structure is kept flat for simplicity and ease of navigation.
- **Important Packages**: This project uses a variety of packages to enhance development. Some of the key packages include:
  - 🧠 Core: `vue`, `vue-router`
  - ⚙️ Utilities: `date-fns`
  - 🎨 Icons: `unplugin-icons`

### 🚀 Development Tools

- 🚅 [Vite](https://vitejs.dev/): An extremely fast frontend build tool, leaner and faster than traditional webpack.
- 📜 [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that scales.
- 🔍 [ESLint](https://eslint.org/): A tool to find and fix problems in your JavaScript code.
- 🎨 [Prettier](https://prettier.io/): An opinionated code formatter.
- 🧪 [Vitest](https://vitest.dev/): A testing tool for Vite projects.


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
