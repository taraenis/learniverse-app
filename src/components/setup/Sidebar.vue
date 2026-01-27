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

      <div class="steps">
        <div v-for="(step, index) in steps" :key="index" class="step-item">
          <div class="icon-wrapper">
            <div class="icon">✓</div>
          </div>
          <div class="text">
            <h4>{{ t(step.title) }}</h4>
            <p>{{ t(step.description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { STEPS } from '@/data/mock-steps';

interface Step {
  title: string;
  description: string;
}

const { t } = useI18n();
const steps = ref<readonly Step[]>(STEPS);
</script>

<style scoped lang="scss">
.sidebar {
  .wrapper {
    padding: 5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100vh;

    h2 {
      font-weight: 400;
    }

    .time-badge {
      background-color: #042223;
      color: #cfe6e7;
      padding: 0.3125rem 0.625rem;
      border-radius: 1rem;
      display: inline-block;
      margin-bottom: 1.25rem;
      font-size: 0.875rem;
    }

    .steps {
      display: flex;
      flex-direction: column;
      margin: 0 0.5rem;

      .step-item {
        display: flex;
        align-items: center;
        margin-bottom: 3rem;
        position: relative;

        &:last-child {
          margin-bottom: 0;
        }

        &:not(:last-child)::after {
          content: '';
          position: absolute;
          top: 55px;
          left: 15px;
          height: 100%;
          border: 1px dashed;
        }

        .icon-wrapper {
          margin-right: 1rem;

          .icon {
            background: #042223;
            width: 34px;
            height: 34px;
            color: #6fb3b8;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          p,
          h4 {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
