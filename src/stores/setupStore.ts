import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSetupStore = defineStore('setupStore', () => {
  const jobLink = ref<string>('');
  const isGenerating = ref<boolean>(false);

  const generateScenarios = async () => {
    if (!jobLink.value.trim()) return;

    isGenerating.value = true;
    try {
    } finally {
      isGenerating.value = false;
    }
  };

  return { jobLink, isGenerating, generateScenarios };
});
