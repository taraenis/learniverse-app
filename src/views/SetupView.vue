<template>
  <div class="setup-page">
    <Sidebar class="sidebar-width" />
    <main class="content-area">
      <PrepareJobInterview @onGenerateInterviewScenarios="onGenerateInterviewScenarios" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Sidebar from '@/components/setup/Sidebar.vue';
import PrepareJobInterview from '@/components/setup/PrepareJobInterview.vue';

const router = useRouter();

const onGenerateInterviewScenarios = () => {
  router.push({
    path: '/assessment',
  });
};
</script>

<style scoped>
.setup-page {
  display: flex;
  height: 100vh;
  color: #000000;
  background-color: #ffffff;

  .sidebar-width {
    width: 30%;
    background-color: #f9f9f9;
  }

  .content-area {
    flex: 1;
    padding: 60px;
  }
}
</style>
