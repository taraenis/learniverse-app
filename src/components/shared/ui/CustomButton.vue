<template>
  <button class="custom-btn" :disabled="disabled" @click="$emit('onClick')">{{ text }} ↗</button>
</template>

<script setup lang="ts">
interface Props {
  disabled?: boolean;
  text: string;
}

defineProps<Props>();
defineEmits(['onClick']);
</script>

<style scoped lang="scss">
.custom-btn {
  margin-top: 0.75rem;
  padding: 0.75rem 1.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: #f3f6f7;
  color: #0c1417;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }
}
</style>
