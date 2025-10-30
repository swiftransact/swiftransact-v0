import { defineStore } from 'pinia';
import type { Toast } from '~/utils/types/types';

export const useAppStore = defineStore('app', () => {

  const selectedWallet = ref('')
  const toasts = ref<Toast[]>([])
  const removeToast = (id:string) => {
    toasts.value = toasts.value.filter(toast => toast.id !== id)
}
  return {
    selectedWallet,
    toasts,
    removeToast,
  }
});