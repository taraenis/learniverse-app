<template>
  <main class="assessment-page">
    <template v-if="!isFinished">
      <ProgressBar :percent="progressPercent" />

      <QuestionCard
        v-if="currentQuestion"
        :index="currentIndex"
        :text="currentQuestion.text"
        :sampleAnswer="currentQuestion.sampleAnswer"
        v-model="currentAnswer"
      />

      <div class="footer-actions">
        <CustomButton
          symbol="↖"
          symbolPosition="before"
          :text="t('assessment.previous')"
          :disabled="currentIndex === 0"
          @onClick="onPrevious"
        />
        <CustomButton
          symbol="↗"
          :text="continueButtonText"
          :disabled="!canContinue"
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
import { useAssessmentStore } from '@/stores/assessment.store';
import { useAssessmentNavigation } from '@/composables/useAssessmentNavigation';
import { useAssessmentFlow } from '@/composables/useAssessmentFlow';
import { useAssessmentQuestion } from '@/composables/useAssessmentQuestion';
import CustomButton from '@/components/shared/ui/CustomButton.vue';
import QuestionCard from '@/components/assessment/QuestionCard.vue';
import ProgressBar from '@/components/assessment/ProgressBar.vue';
import ScoreSummary from '@/components/assessment/ScoreSummary.vue';
import { computed } from 'vue';

const { t } = useI18n();
const assessmentStore = useAssessmentStore();
const { continueButtonText, onContinue, onPrevious, onReset } = useAssessmentNavigation();
const { progressPercent, currentQuestion, canContinue, isFinished } = useAssessmentFlow();
const { currentAnswer } = useAssessmentQuestion();
const currentIndex = computed(() => assessmentStore.currentIndex);
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
  background:
    radial-gradient(circle at 50% 40%, rgba(74, 195, 214, 0.18), rgba(0, 0, 0, 0.85) 60%), #06090c;
  color: #e6eef0;

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
