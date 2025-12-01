import { defineStore } from "pinia";
import { walletOptions } from "~/utils/constants/appData";
import type { Toast } from "~/utils/types/types";

export const useAppStore = defineStore("app", () => {
  const selectedWallet = ref<(typeof walletOptions)[number] | undefined>(
    walletOptions[0]
  );
  const toasts = ref<Toast[]>([]);
  const removeToast = (id: string) => {
    toasts.value = toasts.value.filter((toast) => toast.id !== id);
  };
  return {
    selectedWallet,
    toasts,
    removeToast,
  };
});
