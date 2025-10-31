<template>
    <div class="flex justify-between items-center top-nav">
      <BackButton :icon-size="24" text-style="text-lg font-semibold text-text-black" :title="title" />
      <div class="flex items-center gap-4">
        <icon v-if="showSettings" name="settings" @click="goTo('/settings')" :size="16" color="var(--color-subtext)" />
        <select-wallet v-if="showWallet" />
        <slot name="right" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  const props = defineProps<{
    title?: string;
    showSettings?: boolean;
    showWallet?: boolean;
  }>();
  </script>
  
  <style scoped>
  .top-nav{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: var(--color-background);
      padding-top: calc(var(--top) + 15px);
      padding-left: calc(var(--left) + 20px);
      padding-right: calc(var(--right) + 20px);
      padding-bottom: 15px;
      z-index: 100;
  }
  </style> 