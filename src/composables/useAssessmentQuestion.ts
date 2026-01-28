import { ref, watch } from 'vue';
import { useAssessmentStore } from '@/stores/assessment.store';
import { useAssessmentFlow } from './useAssessmentFlow';

export function useAssessmentQuestion() {
  const store = useAssessmentStore();
  const { currentQuestion } = useAssessmentFlow();

  const currentAnswer = ref('');

  const syncAnswer = () => {
    const question = currentQuestion.value;
    if (!question) return;

    const savedAnswer = store.answers.get(question.id);

    if (savedAnswer) {
      currentAnswer.value = savedAnswer;
    } else if (question.sampleAnswer) {
      currentAnswer.value = question.sampleAnswer;
      store.setAnswer(question.id, question.sampleAnswer);
    } else {
      currentAnswer.value = '';
    }
  };

  watch(
    currentQuestion,
    () => {
      syncAnswer();
    },
    { immediate: true },
  );

  watch(currentAnswer, (newValue) => {
    const question = currentQuestion.value;
    if (question) {
      store.setAnswer(question.id, newValue);
    }
  });

  return {
    currentAnswer,
  };
}
