import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => {
  const currentTab = ref('home');

  return {
    currentTab,
  }
});