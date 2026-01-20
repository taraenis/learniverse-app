<template>
  <section class="question">
    <h1>{{ t('assessment.question') }} {{ index + 1 }}:</h1>
    <h1 class="question__text">{{ t(`assessment.questions.question${index + 1}`) }}</h1>
    <p class="question__sample-answer">{{ t(`assessment.answers.answer${index + 1}`) }}</p>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

interface Props {
  index: number;
  text: string;
  sampleAnswer: string;
}
defineProps<Props>();

const { t } = useI18n();
</script>

<style scoped lang="scss">
.question {
  max-width: 45rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0.5rem 0;
  }

  &__sample-answer {
    margin-top: 1rem;
    opacity: 0.3;
    line-height: 1.5;
    padding-left: 4rem;
  }
}
</style>
