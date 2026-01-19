<script setup lang="ts">
import LangSwitcher from './components/LangSwitcher.vue';
</script>

<template>
  <LangSwitcher />
  <main class="main-content">
    <router-view />
  </main>
</template>
