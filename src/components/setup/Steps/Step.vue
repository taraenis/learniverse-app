<template>
  <div class="step-item">
    <div class="icon-wrapper">
      <div class="icon">✓</div>
    </div>
    <div class="text">
      <h3>{{ t(step.title) }}</h3>
      <p>{{ t(step.description) }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

interface Step {
  step: {
    title: string;
    description: string;
  };
}
defineProps<Step>();

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.step-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 20px;
    top: calc(50% + 25px);
    width: 0;
    height: 100%;
    border-left: 1px dashed #999;
  }

  .icon-wrapper {
    flex-shrink: 0;
    z-index: 1;

    .icon {
      background: #0d1b1e;
      width: 40px;
      height: 40px;
      color: #6fb3b8;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 500;
      color: #000;
      line-height: 1.2;
    }

    p {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.4;
      color: #4a5568;
      max-width: 450px;
    }
  }
}
</style>
