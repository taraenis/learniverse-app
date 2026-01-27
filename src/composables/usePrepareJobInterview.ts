import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSetupStore } from '@/stores/setup.store';

export function usePrepareJobInterview() {
  const { t } = useI18n();
  const setupStore = useSetupStore();

  const jobLinkURL = ref<string>(setupStore.jobURL ?? '');
  const errorMessage = ref<string>('');

  watch(jobLinkURL, (value) => {
    if (!value) {
      errorMessage.value = '';
      return;
    }

    try {
      new URL(value);
      errorMessage.value = '';
    } catch {
      errorMessage.value = t('assessment.jobLinkInvalidURL');
    }
  });

  const onGenerate = () => {
    if (!errorMessage.value && jobLinkURL.value.trim()) {
      setupStore.setJobURL(jobLinkURL.value.trim());
      return true;
    }
    return false;
  };

  const reset = () => {
    jobLinkURL.value = '';
    errorMessage.value = '';
    setupStore.reset();
  };

  return {
    jobLinkURL,
    errorMessage,
    onGenerate,
    reset,
  };
}
