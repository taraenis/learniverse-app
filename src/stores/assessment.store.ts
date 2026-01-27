import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Question } from '@/models/question';
import mockQuestions from '@/data/mock-questions';

export const useAssessmentStore = defineStore('assessment', () => {
  const questions = ref<Question[]>(structuredClone(mockQuestions));
  const currentIndex = ref(0);
  const answers = ref<Map<number, string>>(new Map());
  const isFinished = ref(false);

  function setAnswer(questionId: number, value: string) {
    if (!value || value.trim() === '') {
      answers.value.delete(questionId);
    } else {
      answers.value.set(questionId, value);
    }
  }

  function next() {
    if (currentIndex.value < questions.value.length - 1) {
      currentIndex.value++;
    } else {
      isFinished.value = true;
    }
  }

  function prev() {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
  }

  function reset() {
    currentIndex.value = 0;
    isFinished.value = false;
    answers.value.clear();
  }

  return {
    questions,
    currentIndex,
    answers,
    isFinished,
    setAnswer,
    next,
    prev,
    reset,
  };
});
