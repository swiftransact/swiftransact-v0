<template>
<s-app class="flex items-center justify-center">
    <img 
      :src="isDark ? '/images/logo-dark.svg' : '/images/logo-light.svg'" 
      alt="logo" 
      class="shrink-0 w-[118.138px] h-[126.897px] logo-animate" 
    />
</s-app>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core';

const isDark = useDark();
</script>
<style scoped>
.logo-animate {
  animation: logoEntrance 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
             logoPulse 2s ease-in-out 1.5s infinite;
}

@keyframes logoEntrance {
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes logoPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}
</style>
