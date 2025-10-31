<template>
    <div class="h-full">
      <p class="text-base text-text1 font-semibold">Last opened</p>
      <div class="bg-surface border border-border-subtle p-3 rounded-sm mt-4">
        <p class="text-subtext py-2 text-[15px] dashed-border text-center">The services you use most will show up here</p>
      </div>
      <p class="text-text1 font-semibold text-base mt-8">Bills and payment</p>
      <div class="bg-surface w-full border border-border-subtle p-3 rounded-sm grid grid-cols-4 items-start mt-4 justify-between gap-y-8 relative">
        <star top="0px" left="0px" />
        <div 
          class="flex flex-col items-center gap-2 text-center"
          v-for="service in appServices.filter(service => service.name !== 'Bills')" :key="service.name"
          @click="goTo(service.to)"
          >
          <icon-box 
          tint-size="31px" 
          :tint-color="isDark ? '#333' : '#F0EFE7'" 
          :size="14" 
          :name="service.icon" 
          :color="service.color" 
        />
        <p class="text-sm font-semibold text-subtext">{{ service.name }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useDark } from '@vueuse/core';
  import { appServices } from '~/utils/constants/appData';

  const isDark = useDark();

  definePageMeta({
    layout: 'custom',
    title: 'All Services'
  })
  </script>
  <style scoped>
  .dashed-border{
    border-radius: 4px;
    border: 0.75px dashed rgba(156, 163, 175, 0.33);
    background: var(--color-background);
  }
  </style>