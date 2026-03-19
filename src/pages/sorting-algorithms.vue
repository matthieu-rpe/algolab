<script setup lang="ts">
import { onMounted } from 'vue';
import { useSortingAlgorithmsStore } from '@/stores/sorting-algorithms';

import AppButton from '@/components/app-button.vue';
import AppNumberInput from '@/components/app-number-input.vue';
import SortingAlgorithmVisualizer from '@/components/sorting-algorithm-visualizer.vue';

const sortingAlgorithStore = useSortingAlgorithmsStore();

onMounted(() => sortingAlgorithStore.init());
</script>

<template>
  <div class="sorting-algorithms">
    <div class="controls">
      <div class="inputs">
        <AppNumberInput
          id="size"
          label="Columns"
          min="5"
          max="100"
          v-model="sortingAlgorithStore.size"
          :disabled="sortingAlgorithStore.running"
        />
        <AppNumberInput
          id="size"
          label="Speed (ms)"
          min="1"
          max="1000"
          v-model="sortingAlgorithStore.speed"
          :disabled="sortingAlgorithStore.running"
        />
      </div>
      <div class="actions">
        <AppButton :trigger="sortingAlgorithStore.init">Reset</AppButton>
        <AppButton
          v-if="sortingAlgorithStore.running"
          :trigger="sortingAlgorithStore.stop"
          >Stop</AppButton
        >
        <AppButton v-else :trigger="sortingAlgorithStore.run">Run</AppButton>
      </div>
    </div>

    <div class="container">
      <SortingAlgorithmVisualizer
        v-for="algorithm in sortingAlgorithStore.algorithms"
        :key="algorithm.id"
        :algorithm="algorithm"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.sorting-algorithms {
  display: flex;
  flex-direction: row;
  gap: var(--spacing-4xl);
}

.controls {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.container {
  flex-grow: 1;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-3xl);
}
</style>
