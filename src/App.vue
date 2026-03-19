<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'sorting-algorithms' }">
        Sorting Algorithms
      </RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style lang="css">
:root {
  /* palette color */
  --ebony: #090d18;
  --zircon: #fcfdff;

  --azure-radiance: #00a0fe;
  --cyan: #00fee6;
  --caribbean-green: #00e79f;
  --amber: #fcc006;
  --pumpkin: #fe7723;
  --torch-red: #fe1530;

  /* semantic color */
  --background: var(--ebony);
  --text: var(--primary);
  --accent: var(--caribbean-green);
  --neutral: var(--zircon);
  --primary: var(--torch-red);
  --on-primary: var(--ebony);
  --secondary: var(--cyan);
  --tertiary: var(--amber);

  /* text-size */
  --text-xs: 0.6rem;
  --text-sm: 0.8rem;
  --text-base: 16px;
  --text-lg: 1.2rem;
  --text-xl: 1.4rem;

  /* spacing */
  --spacing-xs: 2px;
  --spacing-sm: 4px;
  --spacing-md: 8px;
  --spacing-lg: 12px;
  --spacing-xl: 18px;
  --spacing-2xl: 24px;
  --spacing-3xl: 36px;
  --spacing-3xl: 48px;
  --spacing-4xl: 64px;
  --spacing-5xl: 96px;
  --spacing-6xl: 128px;

  /* border */
  --border-xs: 1px;
  --border-sm: 2px;
  --border-md: 4px;
  --border-lg: 6px;
  --border-xl: 8px;

  /* size */
  --size-xs: 2px;
  --size-sm: 4px;
  --size-md: 8px;
  --size-lg: 16px;
  --size-xl: 24px;
  --size-2xl: 36px;
  --size-3xl: 48px;
  --size-4xl: 64px;
  --size-5xl: 96px;
  --size-6xl: 128px;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  background-color: var(--background);
  color: var(--text);
  font-size: var(--text-base);
  font-family: 'Courier New', Courier, monospace;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--primary), transparent 85%) 0%,
    color-mix(in srgb, var(--primary), transparent 95%) 33%,
    color-mix(in srgb, var(--primary), transparent 95%) 66%,
    color-mix(in srgb, var(--primary), transparent 85%) 100%
  );
}
</style>

<style lang="css" scoped>
header {
  flex-shrink: 0;
  text-align: center;

  border-bottom: var(--border-xs) solid var(--primary);
  padding: var(--spacing-xl);
  margin: 0 var(--spacing-3xl);
}

header > nav {
  display: flex;
  flex-direction: row;
  gap: var(--spacing-2xl);
}

header > nav > a {
  text-decoration: none;
}

header > nav > a:not(.router-link-exact-active) {
  color: var(--primary);
}

header > nav > a.router-link-exact-active {
  color: var(--accent);
}

main {
  flex-grow: 1;
  margin: var(--spacing-2xl);
}
</style>
