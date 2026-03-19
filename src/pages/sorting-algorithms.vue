<script setup lang="ts">
import { onMounted, ref } from 'vue';

import type { Algorithm, SortingEngine } from '@/types/algorithm';

import { bubbleSort } from '@/algorithms/sorting-engines/bubble';
import { mergeSort } from '@/algorithms/sorting-engines/merge';
import { selectionSort } from '@/algorithms/sorting-engines/selection';

import SortingAlgorithmContainer from '@/components/sorting-algorithm-container.vue';

const size = defineModel<number>('size', { default: 25 });
const speed = defineModel<number>('speed', { default: 100 });

const algorithms = ref<Algorithm<SortingEngine>[]>([]);
const timer = ref<number | null>(null);
let flaggedTime: number | null = null;

function updateTimer() {
  if (flaggedTime) {
    const currentTime = performance.now();
    const delta = currentTime - flaggedTime;
    flaggedTime = currentTime;

    algorithms.value.forEach((a) => {
      if (!a.done) {
        a.time += delta;
      }
    });
  }
}

function stop() {
  if (timer.value) {
    clearInterval(timer.value);
    updateTimer();
    timer.value = null;
  }
}

function init() {
  stop();

  flaggedTime = null;

  const randomData = Array.from(
    { length: size.value },
    () => Math.floor(Math.random() * 100) + 1,
  );

  const configs = [
    { id: 'bubble', sort: bubbleSort },
    { id: 'selection', sort: selectionSort },
    { id: 'merge', sort: mergeSort },
  ];

  algorithms.value = configs.map(({ id, sort }) => {
    const data = [...randomData];

    return {
      id,
      engine: sort(data),
      time: 0,
      state: {
        data,
        comparing: [],
        moving: [],
        sorted: [],
      },
      done: false,
    };
  });
}

function run() {
  if (!!timer.value) return;

  flaggedTime = performance.now();

  timer.value = setInterval(() => {
    updateTimer();

    let allDone = true;

    algorithms.value.forEach((a) => {
      if (a.done) return;
      allDone = false;

      const step = a.engine.next();

      if (step.done) {
        a.done = true;
      } else {
        a.state = step.value;
      }
    });

    if (allDone) stop();
  }, speed.value);
}

onMounted(() => init());
</script>

<template>
  <header>
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
            v-model="size"
            :disabled="!!timer"
          />
        </div>
        <div class="input">
          <label for="speed">Speed (ms)</label>
          <input
            type="number"
            id="speed"
            min="1"
            max="10000"
            v-model="speed"
            :disabled="!!timer"
          />
        </div>
      </div>
      <div class="launchers">
        <button id="reset" @click="init">Reset</button>
        <button v-if="timer" id="stop" @click="stop">Stop</button>
        <button v-else id="play" @click="run">Start</button>
      </div>
    </div>
  </header>

  <main>
    <SortingAlgorithmContainer :algorithms="algorithms" />
  </main>
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
</style>
