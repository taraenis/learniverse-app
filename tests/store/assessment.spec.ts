import { setActivePinia, createPinia } from 'pinia';
import { describe, beforeEach, it, expect } from 'vitest';
import { useAssessmentStore } from '@/stores/assessment.store';

describe('Assessment Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('starts at 33% progress on the first question', () => {
    const store = useAssessmentStore();
    expect(store.currentIndex).toBe(0);
  });

  it('increments index correctly when next is called', () => {
    const store = useAssessmentStore();
    store.next();
    expect(store.currentIndex).toBe(1);
  });

  it('marks assessment as finished when next is called on last question', () => {
    const store = useAssessmentStore();
    store.currentIndex = store.questions.length - 1;
    store.next();
    expect(store.isFinished).toBe(true);
  });

  it('decrements index and resets finished state on prev', () => {
    const store = useAssessmentStore();
    store.next();
    expect(store.currentIndex).toBe(1);
    store.prev();
    expect(store.currentIndex).toBe(0);
  });
});
