<template>
  <div class="lang-switcher">
    <button type="button" @click="setLanguage('en')" :class="{ active: currentLang === 'en' }">
      EN
    </button>

    <button type="button" @click="setLanguage('de')" :class="{ active: currentLang === 'de' }">
      DE
    </button>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage';
const { currentLang, setLanguage } = useLanguage();
</script>

<style scoped>
.lang-switcher {
  display: flex;
  justify-content: right;

  button {
    cursor: pointer;
    border: 0;
    padding: 1rem 1.5rem;

    &.active {
      font-weight: bold;
      color: #042223;
    }
  }
}
</style>
