<template>
  <div class="min-h-screen p-5 flex items-center justify-center">
    <div class="max-w-[500px] text-center flex items-center flex-col gap-4">
      <IconBox tint-size="120px" tint-color="var(--color-background1)" name="warning" :size="80" :color="'var(--color-primary)'" />
      <h1 class="text-primary text-7xl font-bold tracking-[-2px]">404</h1>
      <h3 class="text-text-black text-[28px] font-semibold tracking-[-0.5px] m-0">Page Not Found</h3>
      <p class="error-description">Oops! The page you're looking for doesn't exist. It might have been moved or deleted.</p>
      <AppButton 
        title="Go Home" 
        variant="primary"
        @click="goTo('/home')" 
        class="mt-4 max-w-[280px]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core';

const isDark = useDark();
</script>

<style scoped>
.error-description {
  font-size: 16px;
  font-weight: 400;
  color: var(--color-text1);
  margin: 0;
  line-height: 1.5;
  max-width: 400px;
}
</style>