<template>
  <div class="flex flex-col items-center mt-[20%]">
    <select-prepaid class="w-fit" v-model="selectedProvider" />
    <service-input
      label="Meter Number"
      v-model="meterNumber"
      placeholder="Meter number"
    />
    <amount-input
      :onClick="handleConfirmPayment"
      class="mt-8"
      :disabled="!meterNumber || !amount"
      v-model="amount"
      placeholder="Enter Amount"
      buttonTitle="Confirm & Pay"
    />
    <LazyBottomSlider
      @update:model-value="modalState = null"
      v-if="modalState"
      :modal="modal!"
      v-model="modalState"
    />
  </div>
</template>

<script setup lang="ts">
import type { Modal } from "~/utils/types/types";
definePageMeta({
  layout: "navigation",
  title: "Buy Electricity",
  showWallet: true,
});
const selectedProvider = ref("");
const meterNumber = ref("");
const amount = ref();

const modalState = ref<"exchanging" | "buying" | "sending" | "success" | null>(
  null
);
const textMap = {
  exchanging: "Exchanging crypto...",
  buying: "Buying Meter",
  sending: "Computing Token",
  success: "Light On",
};
const modal: ComputedRef<Modal | null> = computed(() => {
  if (!modalState.value) return null;
  let text = textMap[modalState.value];
  if (modalState.value === "success") {
    return {
      subtitle: text,
      icon: "recharge",
      primaryActionTitle: "Receipt",
      primaryAction: () => {
        replace(`/receipts/electricity`);
        modalState.value = null;
      },
      primaryActionIcon: "receipt",
      secondaryActionTitle: "Report",
      secondaryAction: () => {
        modalState.value = null;
      },
      secondaryActionIcon: "info",
      type: "success",
    };
  }
  return {
    subtitle: text,
    icon: "recharge",
    primaryActionTitle: "Comfirming payment...",
    primaryAction: () => {
      // showModal.value = false
    },
  };
});
const handleConfirmPayment = () => {
  modalState.value = "exchanging";
  setTimeout(() => {
    modalState.value = "buying";
    setTimeout(() => {
      modalState.value = "sending";
      setTimeout(() => {
        modalState.value = "success";
      }, 1500);
    }, 1500);
  }, 1500);
};
</script>
<style scoped>
input {
  color: var(--color-text-black);
  &::placeholder {
    color: var(--color-text-black);
    opacity: 0.66;
  }
}
</style>
