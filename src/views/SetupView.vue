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

<style scoped lang="scss">
@use '@/assets/styles/vars.scss' as *;

@mixin job-link-input-style {
  :deep() {
    .job-link-input {
      width: 100% !important;
    }
  }
}

.setup-page {
  display: flex;
  color: #000000;
  background-color: #ffffff;
  min-height: 100vh;

  .sidebar-width {
    width: 30%;
    background-color: #f9f9f9;
  }

  .content-area {
    flex: 1;
    padding: 100px 60px;
  }

  @media (max-width: $tablet) {
    .sidebar-width {
      width: 50%;
      min-width: 220px;
      height: auto;
    }

    .content-area {
      padding: 40px;
    }

    @include job-link-input-style;
  }

  @media (max-width: $mobile) {
    flex-direction: column;

    .sidebar-width {
      width: 100%;
      min-width: unset;
      max-width: none;
      height: auto;
    }

    .content-area {
      padding: 20px;
    }

    @include job-link-input-style;
  }

  @media (max-width: $small-mobile) {
    .sidebar-width {
      height: auto;
    }

    .content-area {
      padding: 16px;
    }
  }
}
</style>
