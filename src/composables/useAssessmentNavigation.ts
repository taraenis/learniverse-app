import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useAssessmentFlow } from '@/composables/useAssessmentFlow';
import { router } from '@/router';
import { useSetupStore } from '@/stores/setup.store';
import { useAssessmentStore } from '@/stores/assessment.store';

export function useAssessmentNavigation() {
  const { t } = useI18n();
  const setupStore = useSetupStore();
  const assesmentStore = useAssessmentStore();
  const flow = useAssessmentFlow();

  const continueButtonText = computed(() => {
    return flow.isLast.value ? t('assessment.submit') : t('assessment.continue');
  });

  const onContinue = () => {
    if (flow.canContinue.value) {
      flow.next();
    }
  };

  const onPrevious = () => flow.prev();

  const onReset = () => {
    setupStore.reset();
    assesmentStore.reset();
    router.push({ path: '/' });
  };

  return { continueButtonText, onContinue, onPrevious, onReset };
}
