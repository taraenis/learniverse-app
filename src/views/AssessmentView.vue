<template>
  <main class="assessment-page">
    <template v-if="!store.isFinished">
      <ProgressBar :percent="store.progressPercent" />

      <QuestionCard
        v-if="store.currentQuestion"
        :index="store.currentIndex"
        :text="store.currentQuestion.text"
        :sampleAnswer="store.currentQuestion.sampleAnswer"
      />

      <div class="footer-actions">
        <CustomButton
          symbol="↖"
          symbolPosition="before"
          :text="t('assessment.previous')"
          :disabled="store.currentIndex === 0"
          @onClick="onPrevious"
        />
        <CustomButton
          symbol="↗"
          :text="continueButtonText"
          :disabled="!currentAnswer.trim()"
          @onClick="onContinue"
        />
      </div>
    </template>

    <div v-else>
      <ScoreSummary :buttonText="t('assessment.shareResults')" @onClick="onReset" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { router } from '@/router';
import { useAssessmentStore } from '@/stores/assessmentStore';
import CustomButton from '@/components/shared/ui/CustomButton.vue';
import QuestionCard from '@/components/assessment/QuestionCard.vue';
import ProgressBar from '@/components/assessment/ProgressBar.vue';
import ScoreSummary from '@/components/assessment/ScoreSummary.vue';

const { t } = useI18n();
const store = useAssessmentStore();

const currentAnswer = ref('');

const currentQuestionId = computed(() => store.currentQuestion?.id);
const continueButtonText = computed(() => {
  const isLastQuestion = store.currentIndex === store.questions.length - 1;
  return isLastQuestion ? t('assessment.submit') : t('assessment.continue');
});

watch(
  () => store.currentIndex,
  () => {
    const id = currentQuestionId.value;
    if (!id) return;
    currentAnswer.value = store.answers[id] ?? store.currentQuestion?.sampleAnswer ?? '';
  },
  { immediate: true },
);

watch(currentAnswer, (value) => {
  const id = currentQuestionId.value;
  if (!id) return;
  store.updateSampleAnswer(id, value);
});

const onContinue = () => {
  const id = currentQuestionId.value;
  if (!id || !currentAnswer.value.trim()) return;
  store.setAnswer(id, currentAnswer.value);
  store.next();
};

const onPrevious = () => {
  store.prev();
  const id = currentQuestionId.value;
  if (!id) return;
  currentAnswer.value = store.answers[id] ?? '';
};

const onReset = () => {
  store.reset();
  router.push({
    path: '/',
  });
};
</script>

<style scoped lang="scss">
.assessment-page {
  min-height: 100vh;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      transparent 0%,
      transparent 32%,
      rgba(255, 255, 255, 0.03) 33%,
      transparent 34%,
      transparent 50%,
      rgba(255, 255, 255, 0.02) 51%,
      transparent 52%
    );
    pointer-events: none;
  }

  .footer-actions {
    max-width: 45rem;
    width: 100%;
    display: flex;
    justify-content: right;
    gap: 1rem;
  }
}
</style>
