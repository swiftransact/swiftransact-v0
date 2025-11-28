<template>
  <div class="px-3">
    <!-- -->
    <teleport to="#app-nav-right" v-if="isReady">
      <select-network v-model="provider" />
    </teleport>
    <service-input
      :maxlength="11"
      class="mx-auto w-fit"
      label="Receiver Phone Number"
      v-model="receiverPhoneNumber"
      placeholder="0XX XXXX XXXX"
    />
    <p v-if="PhoneValidation.message" class="italic text-error text-xs">
      {{ PhoneValidation.message }}
    </p>
    <amount-input
      class="mt-8"
      :disabled="!receiverPhoneNumber || !amount"
      v-model="amount"
      placeholder="Add Amount"
      buttonTitle="Pay"
      orientation="horizontal"
    />
    <div class="flex items-center justify-between mt-8">
      <p class="text-text-black text-sm">MTN Airtime Bundle</p>
      <span class="text-[#30ED62] text-sm">more</span>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-4 mb-4">
      <div
        class="bg-text3 rounded-[8px] p-3"
        v-for="bundle in bundles[type as keyof typeof bundles]"
        :key="bundle.amount"
      >
        <p class="text-text-black opacity-70 mb-1 text-base font-semibold">
          {{ bundle.amount }}
        </p>
        <p class="text-text-black opacity-70 text-sm">{{ bundle.value }}</p>
      </div>
    </div>
    <app-button
      class="mt-30"
      title="Confirm & Pay"
      @click="handleConfirmPayment"
    />
    <!-- modals -->
    <LazyBottomSlider
      @update:model-value="modalState = null"
      v-if="modalState"
      :modal="modal!"
      v-model="modalState"
    />
  </div>
</template>

<script lang="ts" setup>
import { airtimeBundle, dataBundle } from "~/utils/constants/mockData";
import validateNumber from "~/utils/validateNumber";
import type { NetworkProvider, Modal } from "~/utils/types/types";
import { NETWORK_PROVIDERS } from "~/utils/constants/appData";

definePageMeta({
  layout: "navigation",
  title: "Buy",
  showWallet: true,
  validate(route) {
    // validate type and provider
    if (!route.params.type || !route.params.provider) return false;
    const validTypes = ["airtime", "data"];
    return (
      validTypes.includes(route.params.type as string) &&
      NETWORK_PROVIDERS.includes(route.params.provider as NetworkProvider)
    );
  },
});
const route = useRoute();
const { isReady } = useTeleport("#app-nav-right");
const provider = ref(route.params.provider as string);
const type = route.params.type as string;
const receiverPhoneNumber = ref("");
const amount = ref();

const bundles = {
  airtime: airtimeBundle,
  data: dataBundle,
} as const;

const modalState = ref<"exchanging" | "buying" | "sending" | "success" | null>(
  null
);
const textMap = {
  exchanging: "Exchanging crypto...",
  buying: `Buying ${type === "airtime" ? "Airtime" : "Data"}..........`,
  sending: `Sending ${type === "airtime" ? "Airtime" : "Data"}.........`,
  success: `${type === "airtime" ? "Airtime" : "Data"} Sent...............`,
};

const PhoneValidation = computed(() => {
  if (!receiverPhoneNumber.value) {
    return {
      isValid: false,
      message: "",
    };
  }
  return validateNumber(
    receiverPhoneNumber.value,
    provider.value.toLowerCase() as NetworkProvider
  );
});
const modal: ComputedRef<Modal | null> = computed(() => {
  if (!modalState.value) return null;
  let text = textMap[modalState.value];
  if (modalState.value === "success") {
    return {
      subtitle: text,
      icon: "recharge",
      primaryActionTitle: "Receipt",
      primaryAction: () => {
        replace(`/receipts/${type}`);
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
// mock implementation
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

<style scoped></style>
