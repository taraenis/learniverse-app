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

      <AnswerInput v-model="currentAnswer" />

      <div class="footer-actions">
        <CustomButton
          symbol="↖"
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
import { useAssessmentStore } from '@/stores/assessmentStore';
import CustomButton from '@/components/shared/ui/CustomButton.vue';
import QuestionCard from '@/components/assessment/QuestionCard.vue';
import AnswerInput from '@/components/assessment/AnswerInput.vue';
import ProgressBar from '@/components/assessment/ProgressBar.vue';
import ScoreSummary from '@/components/assessment/ScoreSummary.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const store = useAssessmentStore();
const currentQuestionId = store.currentQuestion?.id ?? 0;
const currentAnswer = ref(store.answers[currentQuestionId] ?? '');

const continueButtonText = computed(() => {
  const isLastQuestion = store.currentIndex === store.questions.length - 1;
  return isLastQuestion ? t('assessment.submit') : t('assessment.continue');
});

watch(
  () => store.currentIndex,
  (newIndex) => {
    const currentQuestion = store.questions[newIndex];
    if (!currentQuestion) {
      return;
    }
    currentAnswer.value = store.answers[currentQuestion.id] ?? currentQuestion.sampleAnswer;
  },
  { immediate: true },
);

watch(currentAnswer, (newValue) => {
  if (store.currentQuestion) {
    store.updateSampleAnswer(store.currentQuestion.id, newValue);
  }
});

const onContinue = () => {
  if (!store.currentQuestion || !currentAnswer.value) {
    return;
  }

  store.setAnswer(currentQuestionId, currentAnswer.value);

  currentAnswer.value = store.answers[currentQuestionId] ?? '';
};

const onPrevious = () => {
  store.prev();
  currentAnswer.value = store.answers[currentQuestionId] ?? '';
};

const onReset = () => store.reset();
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
