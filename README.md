# Mantine + Vite template

This template provides an opinionated and ready to go tempalte, for when you need to bootstrap an app in a minute.


# Features

* Use [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) and
  [SWC](https://swc.rs/) for Fast Refresh

* Replaced ESLint and Prettier with [Biome](http://biomejs.dev).
  I like both ESlint and Prettier, but Biome is faster.

* Added `@` alias for the source folder. So you can directly import
  `@/components/MyComponent`, instead of relative links.

* Added [vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr),
  so you can easily use SVGs in your code:
  ```js
  import Logo from "@/assets/logo.svg?react";
  ```

* React Router example - [Layout.tsx](src/components/main/Layout.tsx)

* Added [Tabler Icons](https://tablericons.com)

# Why no lock file is added?
Lock file is specific to the package manager that you use. This is intended
to be a template. Without the lock file included, you can use it with
npm, pnpm, yarn, or bun.


# Links:

- [Mantine documentation](https://mantine.dev/)
- [Vite documentation](https://vitejs.dev/)
