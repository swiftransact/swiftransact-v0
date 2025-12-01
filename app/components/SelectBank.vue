<template>
  <div>
    <div class="input-container relative">
      <div
        @click="showBankList = !showBankList"
        class="flex items-center gap-2.5 p-3"
      >
        <span class="truncate max-w-[90px]">{{
          modelValue?.bankName || "Choose a Bank"
        }}</span>
        <icon
          :name="showBankList ? 'arrow_head_up' : 'arrow_head_down'"
          :size="16"
          color="var(--color-black)"
        />
      </div>
      <input
        type="text"
        inputmode="numeric"
        placeholder="Enter Account Number"
        :value="modelValue?.accountNumber || ''"
        @input="onInput"
        :disabled="isVerifying"
      />
      <!-- <Transition name="slide-fade">
        <div v-if="showBankList" class="bank_list absolute">
          <input
            v-model="searchQuery"
            type="text"
            class="search-input"
            placeholder="Search bank..."
            @click.stop
          />
          <div class="max-h-[180px] rounded-md overflow-y-auto">
            <p
              v-for="bank in banks"
              :key="bank.code"
              @click="updateBank(bank)"
              class="py-2 tracking-normal text-text-black px-2.5 text-xs cursor-pointer hover:bg-background"
            >
              {{ bank.name }}
            </p>
          </div>
        </div>
      </Transition> -->
    </div>
    <p v-if="error || errorMessage" class="text-error text-xs mt-1">
      {{ error || errorMessage }}
    </p>
    <p v-else-if="modelValue?.accountName" class="text-xs text-success mt-1">
      {{ modelValue.accountName }}
    </p>
    <LazyBottomSlider v-model="showBankList" title="Select Bank">
      <div class="px-6 py-2 max-h-[350px] overflow-y-auto">
        <div
          @click="updateBank(option)"
          class="flex py-3 items-center gap-2"
          v-for="option in banks"
          :key="option.name"
        >
          <div>
            <span class="text-base block font-medium text-text-black">{{
              option.name
            }}</span>
            <span class="text-xs block text-subtext">{{ option.slug }}</span>
          </div>
        </div>
      </div>
    </LazyBottomSlider>
  </div>
</template>

<script setup lang="ts">
import type { Rule } from "~/utils/types/rules";
import type { Bank } from "~/utils/types/types";

export interface BankAccountDetails {
  bankName: string;
  bankCode: string;
  accountNumber: string;
  accountName: string;
}

const emit = defineEmits<{
  "update:modelValue": [value: BankAccountDetails | null];
}>();

const props = withDefaults(
  defineProps<{
    modelValue?: BankAccountDetails | null;
  }>(),
  {
    modelValue: null,
  }
);

/********************* Computed Properties *********************/
const bankCode = computed(() => props.modelValue?.bankCode || "");
const accountNumber = computed(() => props.modelValue?.accountNumber || "");
const banks = computed(
  () =>
    (data.value?.data.filter((bank: Bank) =>
      bank.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    ) as Bank[]) || []
);

const errorMessage = computed(() => {
  if (!verificationError.value) return "";
  return handleError(verificationError.value);
});

/********************* useQuery *********************/
const { data } = useBank();
const {
  data: verificationData,
  isLoading: isVerifying,
  error: verificationError,
} = verifyAccount(accountNumber, bankCode);

/********************* Refs *********************/
const showBankList = ref(false);
const error = ref("");
const searchQuery = ref("");

/********************* Rules *********************/
const rules: Rule[] = [
  {
    rule: (value) => String(value).length === 10,
    message: "Account number must be 10 digits",
  },
];
/********************* Methods *********************/
const updateValue = (key: keyof BankAccountDetails, value: string) => {
  const newValue: BankAccountDetails = {
    bankName: props.modelValue?.bankName || "",
    bankCode: props.modelValue?.bankCode || "",
    accountNumber: props.modelValue?.accountNumber || "",
    accountName: props.modelValue?.accountName || "",
    [key]: value,
  };
  emit("update:modelValue", newValue);
};

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  validate(target.value);
  updateValue("accountNumber", target.value);
};

const validate = (value: string) => {
  error.value = "";
  for (const rule of rules) {
    if (!rule.rule(value)) {
      error.value = rule.message;
      break;
    }
  }
};

const updateBank = (bank: Bank) => {
  if (isVerifying.value) return;
  const newValue: BankAccountDetails = {
    bankName: bank.name,
    bankCode: bank.code,
    accountNumber: props.modelValue?.accountNumber || "",
    accountName: props.modelValue?.accountName || "",
  };
  emit("update:modelValue", newValue);
  showBankList.value = false;
};

/********************* Watchers *********************/
watch(
  () => verificationData.value,
  (newVal) => {
    if (newVal && newVal.status && newVal.data.account_name) {
      updateValue("accountName", newVal.data.account_name);
    }
  }
);

// Clear account name when there's a verification error
watch(
  () => verificationError.value,
  (error) => {
    if (error && props.modelValue?.accountName) updateValue("accountName", "");
  }
);
</script>

<style scoped>
.input-container {
  color: var(--color-text-black);
  font-size: 12px;
  border-radius: 8px;
  border: 1.5px solid var(--color-background-input);
  display: flex;
  gap: 14px;
}
input {
  flex: 1;
  width: 100%;
  padding: 12px;
  font-size: 13px;
  font-weight: 400;
  border-left: 1.5px solid var(--color-background-input) !important;
}
.bank_list {
  top: 110%;
  width: 100%;
  padding: 8px;
  background-color: var(--color-background-input);
  border: 1px solid var(--color-border4) !important;
  border-radius: 8px;
  color: var(--color-black);
  z-index: 100;
}
</style>
