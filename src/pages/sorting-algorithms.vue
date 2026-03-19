<script setup lang="ts">
import { onMounted } from 'vue';
import { useSortingAlgorithmsStore } from '@/stores/sorting-algorithms';

import SortingAlgorithmVisualizer from '@/components/sorting-algorithm-visualizer.vue';

const sortingAlgorithStore = useSortingAlgorithmsStore();

onMounted(() => sortingAlgorithStore.init());
</script>

<template>
  <div>
    <h1>Sorting Algorithms</h1>
    <div class="controls">
      <div class="inputs">
        <div class="input">
          <label for="data">Columns</label>
          <input
            type="number"
            id="data"
            min="1"
            max="1000"
            v-model="sortingAlgorithStore.size"
            :disabled="sortingAlgorithStore.running"
          />
        </div>
        <div class="input">
          <label for="speed">Speed (ms)</label>
          <input
            type="number"
            id="speed"
            min="1"
            max="10000"
            v-model="sortingAlgorithStore.speed"
            :disabled="sortingAlgorithStore.running"
          />
        </div>
      </div>
      <div class="launchers">
        <button id="reset" @click="sortingAlgorithStore.init">Reset</button>
        <button
          v-if="sortingAlgorithStore.running"
          id="stop"
          @click="sortingAlgorithStore.stop"
        >
          Stop
        </button>
        <button v-else id="play" @click="sortingAlgorithStore.run">
          Start
        </button>
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

<style scoped>
header {
  flex-shrink: 0;
  text-align: center;
  background-color: var(--dark);
  box-shadow: 0 0 10px var(--torch-red);
  color: var(--text__highlight);
  margin: 1rem;
  padding: 1rem;
}

.controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.inputs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}

.input {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.launchers {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}

main {
  flex-grow: 1;
  margin: 1rem;
}

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
