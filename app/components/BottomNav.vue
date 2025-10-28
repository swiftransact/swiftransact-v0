<template>
    <div class="bottom-nav">
      <div @click="navigateTo(item.value)" v-for="item in navItems" :key="item.name" class="flex flex-col gap-1 items-center">
        <Icon :color="activeTab === item.value ? 'var(--color-primary)' : 'var(--color-subtext)' " :name="item.icon" :size="24" />
        <span :class="activeTab === item.value ? 'active' : 'inactive'" class="text-xs font-medium text-center">{{ item.name }}</span>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import { navItems } from '~/utils/constants/appData';

const route = useRoute();
const activeTab = computed(() => route.path);

  </script>
  <style scoped>
  .active{
    color: var(--color-primary);
  }
  .inactive{
    color: var(--color-subtext);
  }
  .bottom-nav{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-background);
    justify-content: space-between;
    border-top: 0.75px solid rgba(108, 108, 108, 0.22);
    display: flex;
    padding: 15px 20px calc(var(--bottom) + 15px) 20px;
    min-height: fit-content;
  }
  </style>