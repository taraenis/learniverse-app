import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';
import { type Question } from '@/models/question';
import mockQuestions from '@/data/mock-questions';

export const useAssessmentStore = defineStore('assessmentStore', () => {
  const currentIndex = ref(0);
  const questions = ref<Question[]>(mockQuestions as Question[]);
  const answers = reactive<Record<number, string>>({});
  const isFinished = ref(false);

  const progressPercent = computed(() => {
    const total = questions.value.length;
    return total > 0 ? Math.round(((currentIndex.value + 1) / total) * 100) : 0;
  });

  const currentQuestion = computed(() => questions.value[currentIndex.value]);

  const canContinue = computed(() => {
    const activeQuestion = currentQuestion.value;
    if (!activeQuestion) return false;
    return Boolean(answers[activeQuestion.id]);
  });

  function prev() {
    if (currentIndex.value > 0) {
      if (isFinished.value) {
        isFinished.value = false;
      } else {
        currentIndex.value--;
      }
    }
  }

  function next() {
    if (currentIndex.value < questions.value.length - 1) {
      currentIndex.value++;
    } else {
      isFinished.value = true;
    }
  }

  function setAnswer(questionId: number, value: string) {
    answers[questionId] = value;
  }

  function reset() {
    currentIndex.value = 0;
    Object.keys(answers).forEach((key) => delete answers[Number(key)]);
    isFinished.value = false;
  }

  function updateSampleAnswer(questionId: number, newText: string) {
    const question = questions.value.find((q) => q.id === questionId);
    if (question) {
      question.sampleAnswer = newText;
    }
  }

  return {
    currentIndex,
    questions,
    answers,
    isFinished,
    progressPercent,
    currentQuestion,
    canContinue,
    setAnswer,
    prev,
    next,
    reset,
    updateSampleAnswer,
  };
});
