<template>
  <div class="prepare-interview-container">
    <h1>{{ t('setup.prepareForInterview') }}</h1>
    <h2>{{ t('setup.pasteJobDescription') }}</h2>

    <form @submit.prevent="onGenerate">
      <div v-if="errorMessage" class="error">
        <div class="error-message">
          {{ t('assessment.jobLinkInvalidURL') }}
        </div>
      </div>

      <label for="job-link-input-label">{{ t('setup.input_label') }}</label>

      <input
        id="job-link-input-label"
        class="job-link-input"
        type="text"
        v-model="jobLinkURL"
        :placeholder="t('setup.input_placeholder')"
      />

      <div>
        <button type="submit" class="generate-btn" :disabled="!jobLinkURL || !!errorMessage">
          {{ t('setup.generateInterviewScenarios') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const emit = defineEmits(['onGenerateInterviewScenarios']);

const jobLinkURL = ref<string>('');
const errorMessage = ref<string>('');

watch(jobLinkURL, (newValue) => {
  if (!newValue) {
    errorMessage.value = '';
    return;
  }

  try {
    new URL(newValue);
    errorMessage.value = '';
  } catch {
    errorMessage.value = t('assessment.jobLinkInvalidURL');
  }
});

const onGenerate = () => {
  if (!errorMessage.value) {
    emit('onGenerateInterviewScenarios', jobLinkURL.value);
  }
};
</script>

<style scoped lang="scss">
.prepare-interview-container {
  padding: 1.25rem;

  h1 {
    color: #031a1b;
    font-weight: 500;
    font-size: 2rem;
  }

  h2 {
    color: #3d4350;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 0.5rem;

    .error {
      .error-message {
        background: #fef3f2;
        border: 1px solid #fecdca;
        border-radius: 9999px;
        color: #d92d20;
        padding: 0.5rem;
        margin-bottom: 1rem;
        display: inline-block;
      }
    }

    label {
      font-weight: 600;
      color: #3d4350;
    }

    .job-link-input {
      width: 31.875rem;
      height: 3rem;
      border: 1px solid #a3a9b6;
      border-radius: 1rem;
      padding: 0 1rem;
      font-size: 0.875rem;
    }

    .generate-btn {
      padding: 0.7rem 1.2rem;
      background: #14161b;
      border-radius: 6px;
      color: #ffffff;
      border: 0;
      font-size: 1rem;
      margin-top: 1rem;
      transition: all 0.3s ease;

      &:disabled {
        background: #a3a9b6;
        cursor: not-allowed;
      }
    }
  }
}
</style>
