<template>
  <div class="progress">
    <div class="progress__track">
      <div class="progress__fill" :style="{ width: `${percent}%` }" />
    </div>
    <span class="progress__text">{{ percent }}% {{ t('assessment.completed') }}</span>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

interface Props {
  percent: number;
}

defineProps<Props>();

const { t } = useI18n();
</script>

<style scoped lang="scss">
.progress {
  width: 100%;
  max-width: 45rem;

  &__track {
    width: 100%;
    height: 0.5rem;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    overflow: hidden;
  }

  &__fill {
    height: 100%;
    background: linear-gradient(90deg, #9fe8f3, #2ab3c6);
    border-radius: inherit;
    transition: width 0.4s ease;
  }

  &__text {
    display: block;
    margin-top: 1rem;
    font-size: 0.875rem;
    color: #9fb6bb;
    text-align: center;
  }
}
</style>
