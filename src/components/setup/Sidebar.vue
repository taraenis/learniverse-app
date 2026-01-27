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
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: 'setup.steps.step1.title',
    description: 'setup.steps.step1.description',
  },
  {
    title: 'setup.steps.step2.title',
    description: 'setup.steps.step2.description',
  },
  {
    title: 'setup.steps.step3.title',
    description: 'setup.steps.step3.description',
  },
  {
    title: 'setup.steps.step4.title',
    description: 'setup.steps.step4.description',
  },
];
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
