<script setup lang="ts">
defineProps<{
  trigger: () => void;
}>();
</script>

<template>
  <button class="button" @click="trigger">
    <slot />
  </button>
</template>

<style lang="css" scoped>
.button {
  cursor: pointer;

  text-transform: uppercase;
  font-weight: bold;

  padding: var(--spacing-md) 0;
  width: var(--size-6xl);
  clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);

  background: var(--primary);
  color: var(--on-primary);
}

.button:disabled {
  cursor: not-allowed;
}
</style>
