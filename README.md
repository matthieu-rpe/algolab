# AlgoLab

A minimalist and immersive visualizer for algorithms and data structures.

## 📌 Why this project?

I built **AlgoLab** to bridge the gap between abstract code and visual intuition. While reading _Cracking the Coding Interview_, I wanted a way to "see" the logic in motion—not just the final result, but every swap, comparison, and recursive call.

The goal is to create a robust playground where I can implement and observe the efficiency of various computer science protocols in a clean, high-performance environment.

## ⚙️ How it works

The project is built using Vue3 to keep it fast and simple:

- **Engine**: Instead of simple loops, I use **JavaScript Generators (`function*`)**. This allows algorithms to act like "engines" that can pause and resume at every step, giving us frame-by-frame control over the visualization.
- **Performance**: Developed with **Vue3** using **TypeScript** and bundled with **Vite** for a strictly typed, optimized, and zero-latency development experience.
- **Rendering**: Direct manipulation of the **HTML5 Canvas** for efficient real-time updates.

## 🗺 Roadmap

### 0. Tech Stack & Tooling

- [x] **Vite**: Modern dev server to handle module bundling and HMR.
- [x] **TypeScript**: Migration to a strictly typed codebase for better maintenance.
- [ ] **CI/CD Pipeline**: Automate builds via GitHub Actions.
- [ ] **Self-Hosting**: Deploy the production build to a **Proxmox LXC** container.

### 1. Data Structure

- [ ] **ArrayList**
- [ ] **HashTable/Set**
- [ ] **StringBuilder**
- [ ] **LinkedList**
- [ ] **Stack**
- [ ] **Queue**
- [ ] **Graph**
- [ ] **Trees**
- [ ] **Tries**

### 2. Sorting Algorithms

- [ ] **Bubble Sort**: Moving the largest elements to the end ($O(n^2)$).
- [ ] **Selection Sort**: Finding the minimum and placing it at the start ($O(n^2)$).
- [ ] **Merge Sort**: Visualizing recursive divide-and-conquer ($O(n \log n)$).

### 3. Searching Algorithms

- [ ] **Linear search**: Unsorted but inefficient
- [ ] **Binary Search**: Efficiently cutting the search space in half.

## Configuration

### Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## 🚀 Getting Started

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Production & HomeLab

This project is designed to be lightweight and easy to host.

1. **Build**: Generates a static `/dist` folder.

```bash
npm run build
```
