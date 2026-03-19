<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

import type { Algorithm, SortingEngine } from '@/types/algorithm';

const props = defineProps<{
  algorithm: Algorithm<SortingEngine>;
}>();

const canvasRef = ref<HTMLCanvasElement | null>(null);

function draw() {
  const canvas = canvasRef.value;
  if (!canvas || !props.algorithm.state) return;

  const { width, height } = canvas;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const { data, comparing, moving, sorted } = props.algorithm.state;

  ctx.clearRect(0, 0, width, height);

  const barWidth = width / data.length;

  data.forEach((val, i) => {
    ctx.fillStyle = '#c5003c44'; // default color
    if (comparing.includes(i)) ctx.fillStyle = '#55ead4'; // comparing
    if (moving.includes(i)) ctx.fillStyle = '#f3e600'; // moving
    if (sorted?.includes(i)) ctx.fillStyle = '#c5003c'; // sorted

    const barHeight = (val / 100) * height;

    ctx.fillRect(i * barWidth, height - barHeight, barWidth - 2, barHeight);
  });
}

watch(
  () => props.algorithm.state,
  () => {
    draw();
  },
  { deep: true },
);

onMounted(() => {
  if (canvasRef.value) {
    canvasRef.value.width = canvasRef.value.clientWidth;
    canvasRef.value.height = canvasRef.value.clientHeight;
    draw();
  }
});
</script>

<template>
  <div class="visualizer">
    <div class="algorithm">
      <h3>{{ algorithm.id }} Sort</h3>
      <div>{{ (Math.floor(algorithm.time) / 1000).toFixed(1) }}s</div>
    </div>
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<style lang="css" scoped>
.visualizer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.algorithm {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

h3 {
  color: var(--text__highlight);
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 2px;
  margin: 0;
}

canvas {
  width: 100%;
  aspect-ratio: 2/1;
}
</style>
