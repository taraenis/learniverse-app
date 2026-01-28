<template>
  <div class="steps">
    <StepItem v-for="(step, index) in steps" :key="index" :step="step" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { STEPS } from '@/data/mock-steps';
import StepItem from '@/components/setup/Steps/Step.vue';
import type { Step } from '@/models/step';

const steps = ref<readonly Step[]>(STEPS);
</script>

<style scoped lang="scss">
.steps {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
