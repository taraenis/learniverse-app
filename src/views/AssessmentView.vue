<template>
  <main class="assessment-page">
    <template v-if="!assessmentStore.isFinished">
      <ProgressBar :percent="assessmentStore.progressPercent" />

      <QuestionCard
        v-if="assessmentStore.currentQuestion"
        :index="assessmentStore.currentIndex"
        :text="assessmentStore.currentQuestion.text"
        :sampleAnswer="assessmentStore.currentQuestion.sampleAnswer"
      />

      <div class="footer-actions">
        <CustomButton
          symbol="↖"
          symbolPosition="before"
          :text="t('assessment.previous')"
          :disabled="assessmentStore.currentIndex === 0"
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
import { useI18n } from 'vue-i18n';
import { useAssessmentStore } from '@/stores/assessmentStore';
import { useAssessmentQuestion } from '@/composables/useAssessmentQuestion';
import { useAssessmentNavigation } from '@/composables/useAssessmentNavigation';
import CustomButton from '@/components/shared/ui/CustomButton.vue';
import QuestionCard from '@/components/assessment/QuestionCard.vue';
import ProgressBar from '@/components/assessment/ProgressBar.vue';
import ScoreSummary from '@/components/assessment/ScoreSummary.vue';

const { t } = useI18n();
const assessmentStore = useAssessmentStore();
const { currentAnswer } = useAssessmentQuestion();
const { continueButtonText, onContinue, onPrevious, onReset } =
  useAssessmentNavigation(currentAnswer);
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
