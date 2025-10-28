<template>
    <button @click="navigateTo()" class="flex items-center gap-3">
        <icon :name="iconName" :size="iconSize" :color="isDark ? '#FFFFFF' : '#000000'"  />
        <span :class="textStyle">{{ title ?? 'Back' }}</span>
    </button>
  </template>
  
  <script setup lang="ts">
  import { useDark } from '@vueuse/core';
import type { IconName } from '~/utils/types/icons';

  const isDark = useDark();
    const props = withDefaults(defineProps<{
        path?: string;
        title?: string;
        iconName?: IconName
        iconSize?: number
        textStyle?: string
    }>(), {
        iconSize: 20,
        iconName: 'arrow-back',
        textStyle: 'text-base font-semibold text-text-black'
    });
    const navigateTo = () => {
        if(props.path) return goTo(props.path);
        return goBack();
    }
  </script>
  <style scoped>
  
  </style>