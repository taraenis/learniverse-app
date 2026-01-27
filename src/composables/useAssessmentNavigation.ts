import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { router } from '@/router';
import { useAssessmentStore } from '@/stores/assessmentStore';

export function useAssessmentNavigation(currentAnswer: { value: string }) {
  const { t } = useI18n();
  const store = useAssessmentStore();

  const continueButtonText = computed(() => {
    const isLast = store.currentIndex === store.questions.length - 1;
    return isLast ? t('assessment.submit') : t('assessment.continue');
  });

  const onContinue = () => {
    const id = store.currentQuestion?.id;
    if (!id || !currentAnswer.value.trim()) return;

    store.setAnswer(id, currentAnswer.value);
    store.next();
  };

  const onPrevious = () => {
    store.prev();
  };

  const onReset = () => {
    store.reset();
    router.push({ path: '/' });
  };

  return {
    continueButtonText,
    onContinue,
    onPrevious,
    onReset,
  };
}
