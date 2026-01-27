import { computed } from 'vue';
import { useAssessmentStore } from '@/stores/assessment.store';

export function useAssessmentFlow() {
  const store = useAssessmentStore();

  const totalQuestions = computed(() => store.questions.length);
  const currentQuestion = computed(() => store.questions[store.currentIndex] ?? null);

  const progressPercent = computed(() =>
    totalQuestions.value ? Math.round(((store.currentIndex + 1) / totalQuestions.value) * 100) : 0,
  );

  const canContinue = computed(() => {
    if (!currentQuestion.value) return false;
    const answer = store.answers.get(currentQuestion.value.id);
    return !!answer && answer.trim() !== '';
  });

  const isLast = computed(() => store.currentIndex === totalQuestions.value - 1);
  const isFinished = computed(() => store.isFinished);

  return {
    currentQuestion,
    canContinue,
    progressPercent,
    isLast,
    isFinished,
    next: store.next,
    prev: store.prev,
  };
}
