import { setActivePinia, createPinia } from 'pinia';
import { describe, beforeEach, it, expect } from 'vitest';
import { useAssessmentStore } from '@/stores/assessmentStore';

describe('Assessment Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('increments percentage only after setAnswer is called', () => {
    const store = useAssessmentStore();

    store.setAnswer(1, 'My test answer');
    expect(store.progressPercent).toBe(33);
  });

  it('marks assessment as finished when next is called on last question', () => {
    const store = useAssessmentStore();

    store.currentIndex = store.questions.length - 1;

    store.next();
    expect(store.isFinished).toBe(true);
  });
});
