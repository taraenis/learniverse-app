<template>
  <div class="score-summary">
    <div>
      <h2>{{ t('assessment.yourScore') }}</h2>
      <p>🎉 {{ t('assessment.youAreAlmostReady') }}</p>
    </div>
    <div>
      <h2>{{ t('assessment.generalAdviceTitle') }}</h2>
      <ul class="general-advice">
        <li v-for="(advice, i) in data" :key="i">
          {{ t(`assessment.generalAdviceText${i + 1}`) }}
        </li>
      </ul>
    </div>
    <div>
      <CustomButton @onClick="$emit('onClick')" :text="buttonText" symbol="↗" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import CustomButton from '@/components/shared/ui/CustomButton.vue';
import mockGeneralAdvice from '@/data/mock-general-advice';

interface Props {
  buttonText: string;
}

defineProps<Props>();
defineEmits(['onClick']);

const { t } = useI18n();
const data = ref(mockGeneralAdvice);
</script>

<style scoped lang="scss">
.score-summary {
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.general-advice {
  margin-top: 1rem;
  list-style-type: decimal;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.5rem;
  }
}
</style>
