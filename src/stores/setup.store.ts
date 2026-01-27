import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSetupStore = defineStore('setupStore', () => {
  const jobURL = ref('');

  function setJobURL(url: string) {
    jobURL.value = url;
  }

  function reset() {
    jobURL.value = '';
  }

  return {
    jobURL,
    setJobURL,
    reset,
  };
});
