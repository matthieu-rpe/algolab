<script setup lang="ts">
import type { Algorithm, SortingEngine } from '@/types/algorithm';

import SortingEngineVisualizer from './SortingEngineVisualizer.vue';

defineProps<{
  algorithms: Algorithm<SortingEngine>[];
}>();
</script>

<template>
  <div class="container">
    <SortingEngineVisualizer
      v-for="algorithm in algorithms"
      :key="algorithm.id"
      :algorithm="algorithm"
    />
  </div>
</template>

<style lang="css" scoped>
.container {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.visualizer {
  flex: 0 1 500px;
}
</style>
