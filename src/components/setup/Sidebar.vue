<template>
  <aside class="sidebar">
    <div class="wrapper">
      <h2>{{ t('setup.startPracticingSmarter') }}</h2>

      <div>
        <span class="time-badge">
          <font-awesome-icon icon="fa-solid fa-alarm-clock" />
          {{ t('setup.lessThan3Minute') }}
        </span>
      </div>

      <Steps />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Steps from '@/components/setup/Steps/Steps.vue';
const { t } = useI18n();
</script>

<style scoped lang="scss">
.sidebar {
  .wrapper {
    padding: 5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
      font-weight: 400;
    }

    .time-badge {
      background-color: #042223;
      color: #cfe6e7;
      padding: 0.3125rem 0.625rem;
      border-radius: 1rem;
      display: inline-block;
      font-size: 0.875rem;
    }
  }
}
</style>
