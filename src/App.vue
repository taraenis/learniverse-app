<template>
  <LangSwitcher />
  <main class="app-container fade-in">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import LangSwitcher from '@/components/LangSwitcher.vue';
</script>

<style scoped lang="scss">
.app-container {
  min-height: 100vh;
  width: 100%;
}
</style>
