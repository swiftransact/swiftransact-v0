<template>
  <div>
    <h3 class="text-2xl font-semibold text-text-black">
      {{ settings ? "Manage" : "Connect" }} your wallet
    </h3>
    <p v-if="!settings" class="text-xs text-subtext">
      Connect more than one wallet at the same time to acess all we have to
      offer. We do not store or control your private keys
    </p>
    <div class="mt-4.5 overflow-y-auto" style="max-height: calc(100vh - 500px)">
      <div
        v-for="option in computedWalletOptions"
        :key="option.name"
        class="flex py-3 items-center justify-between"
      >
        <div class="flex items-center gap-1">
          <img :src="option.icon" :alt="option.name" class="w-6 h-6" />
          <span class="text-sm font-medium text-text-black">{{
            option.name
          }}</span>
        </div>
        <button
          @click="
            handleConnect(option, option.connected ? 'unlink' : 'connect')
          "
          class="btn-outlined min-w-[100px] center-content"
        >
          {{ option.connected ? "Unlink" : "Connect" }}
        </button>
      </div>
    </div>
    <div v-if="walletOptions.length > 5" class="flex justify-center">
      <button
        @click="showAll = !showAll"
        class="btn-outlined w-[120px] center-content mt-8"
      >
        {{ showAll ? "See less" : "See more" }}
      </button>
    </div>
    <LazyBottomSlider v-if="modalState" :modal="modal!" v-model="modalState" />
  </div>
</template>

<script setup lang="ts">
import { walletOptions } from "~/utils/constants/appData";
import type { Modal } from "~/utils/types/types";

const emit = defineEmits(["update:step"]);
const props = withDefaults(
  defineProps<{
    settings?: boolean;
  }>(),
  {
    settings: false,
  }
);

const showAll = ref(false);

const computedWalletOptions = computed(() => {
  return showAll.value ? walletOptions : walletOptions.slice(0, 5);
});
const modalState = ref<
  "connecting" | "connected" | "unlinking" | "unlinked" | null
>(null);
const modal: ComputedRef<Modal | null> = computed(() => {
  if (!modalState.value) return null;
  if (modalState.value === "connecting") {
    return {
      title: "Connecting Phantom Wallet",
      subtitle: "Hold o , we are connecting and verifying your wallet",
      icon: "gear-loader",
      primaryActionTitle: "Connecting Wallet",
      primaryAction: () => {
        modalState.value = "connected";
      },
    };
  }
  if (modalState.value === "connected") {
    return {
      title: "Wallet Connected",
      subtitle: "Your wallet has been connected successfully",
      icon: "check-mark",
      primaryActionTitle: "Done",
      primaryAction: () => {
        modalState.value = null;
      },
      secondaryActionTitle: "Connect More Wallet",
      secondaryAction: () => {
        modalState.value = null;
      },
    };
  }
  if (modalState.value === "unlinking") {
    return {
      title: "Unlinking Wallet",
      subtitle: "Are you sure you want to unlink this wallet?",
      icon: "warning",
      primaryActionTitle: "Unlink",
      primaryAction: () => {
        modalState.value = "unlinked";
      },
      secondaryActionTitle: "Cancel",
      secondaryAction: () => {
        modalState.value = null;
      },
    };
  }
  if (modalState.value === "unlinked") {
    return {
      title: "Wallet Unlinked",
      subtitle: "Your wallet has been unlinked successfully",
      icon: "check-mark",
      primaryActionTitle: "Done",
      primaryAction: () => {
        modalState.value = null;
      },
    };
  }
  return null;
});
const handleConnect = (option: any, action: "connect" | "unlink") => {
  modalState.value = action === "connect" ? "connecting" : "unlinking";
  setTimeout(() => {
    modalState.value = action === "connect" ? "connected" : "unlinked";
  }, 1500);
};
</script>

<style scoped></style>
