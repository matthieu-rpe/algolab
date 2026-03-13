# AlgoLab

A minimalist and immersive visualizer for algorithms and data structures.

## 📌 Why this project?

I built **AlgoLab** to bridge the gap between abstract code and visual intuition. While reading _Cracking the Coding Interview_, I wanted a way to "see" the logic in motion—not just the final result, but every swap, comparison, and recursive call.

The goal is to create a robust playground where I can implement and observe the efficiency of various computer science protocols in a clean, high-performance environment.

## ⚙️ How it works

The project is built using modern web standards to keep it fast and "close to the metal":

- **Engine**: Instead of simple loops, I use **JavaScript Generators (`function*`)**. This allows algorithms to act like "engines" that can pause and resume at every step, giving us frame-by-frame control over the visualization.
- **Performance**: Developed with **TypeScript** and bundled with **Vite** for a strictly typed, optimized, and zero-latency development experience.
- **Rendering**: Direct manipulation of the **HTML5 Canvas** for efficient real-time updates.

## 🗺 Roadmap

### 0. Tech Stack & Tooling

- [ ] **Vite**: Modern dev server to handle module bundling and HMR.
- [ ] **TypeScript**: Migration to a strictly typed codebase for better maintenance.
- [ ] **CI/CD Pipeline**: Automate builds via GitHub Actions.
- [ ] **Self-Hosting**: Deploy the production build to a **Proxmox LXC** container.

### 1. Sorting Algorithms (In Progress)

- [x] **Bubble Sort**: Moving the largest elements to the end ($O(n^2)$).
- [ ] **Selection Sort**: Finding the minimum and placing it at the start ($O(n^2)$).
- [ ] **Merge Sort**: Visualizing recursive divide-and-conquer ($O(n \log n)$).

### 2. Searching & Data Structures

- [ ] **Binary Search**: Efficiently cutting the search space in half.
- [ ] **Linked Lists / Trees**: Visualizing pointers and node relationships.

## 🚀 Getting Started

### Development

To run this project locally:

1. **Clone the repo**:

```bash
git clone [https://github.com/matthieu-rpe/AlgoLab.git](https://github.com/matthieu-rpe/AlgoLab.git)
cd algolab
```

2. **Install & Run**:

```bash
npm install
npm run dev
```

### Production & HomeLab

This project is designed to be lightweight and easy to host.

1. **Build**: Generates a static `/dist` folder.

```bash
npm run build
```
