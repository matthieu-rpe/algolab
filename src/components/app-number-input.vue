<script setup lang="ts">
withDefaults(
  defineProps<{
    id: string;
    label: string;
    disabled?: boolean;
    min?: number | string;
    max?: number | string;
  }>(),
  {
    disabled: false,
  },
);

const model = defineModel();
</script>

<template>
  <div class="input">
    <label :for="id">{{ label }}</label>
    <input
      type="number"
      :id="id"
      :min="min"
      :max="max"
      v-model="model"
      :disabled="disabled"
    />
  </div>
</template>

<style lang="css" scoped>
.input {
  width: var(--size-6xl);

  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.input > label {
  text-transform: uppercase;
  font-weight: bold;
  font-size: var(--text-sm);

  color: var(--primary);
}

.input > input {
  outline: none;
  text-align: center;

  font-weight: bold;
  font-size: var(--text-sm);

  border: var(--border-xs) solid var(--primary);

  background: var(--background);
  color: var(--primary);
}

.input > input:disabled {
  cursor: not-allowed;
}

.input > input::-webkit-outer-spin-button,
.input > input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
