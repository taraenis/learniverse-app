<template>
  <textarea
    name="answer"
    class="answer-input"
    placeholder="Type your answer here…"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue: string;
}

defineProps<Props>();
defineEmits(['update:modelValue']);
</script>

<style scoped lang="scss">
.answer-input {
  width: 100%;
  max-width: 45rem;
  min-height: 8.75rem;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.125rem 1.252rem;
  font-size: 1rem;
  color: #e6eef0;
  resize: none;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #7e9aa0;
  }

  &:focus {
    border-color: #3ec7db;
    box-shadow: 0 0 0 3px rgba(62, 199, 219, 0.15);
  }
}
</style>
