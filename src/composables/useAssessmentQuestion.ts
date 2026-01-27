import { ref, computed, watch } from 'vue';
import { useAssessmentStore } from '@/stores/assessmentStore';

export function useAssessmentQuestion() {
  const store = useAssessmentStore();
  const currentAnswer = ref('');
  const currentQuestionId = computed(() => store.currentQuestion?.id);

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

  return {
    currentAnswer,
    currentQuestionId,
  };
}
