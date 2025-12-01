<template>
  <div class="flex justify-between">
    <input
      v-for="i in length"
      :key="i"
      :ref="(el) => setInputRef(el as HTMLInputElement, i - 1)"
      :value="otpArray[i - 1] || ''"
      inputmode="numeric"
      maxlength="1"
      pattern="[0-9]"
      :disabled="disabled"
      @input="onInput(i - 1, $event)"
      @keydown="onKeyDown(i - 1, $event)"
      @paste="onPaste"
      :class="{ error: error, dark: isDark, success: success, secure: secure }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useDark } from "@vueuse/core";

const isDark = useDark();
const emit = defineEmits(["update:modelValue"]);
const props = withDefaults(
  defineProps<{
    length?: number;
    modelValue: string;
    disabled?: boolean;
    error?: boolean;
    success?: boolean;
    secure?: boolean;
  }>(),
  {
    length: 4,
    disabled: false,
    error: false,
    success: false,
    secure: true,
  }
);

// Store input refs
const inputRefs = ref<HTMLInputElement[]>([]);
const setInputRef = (el: HTMLInputElement, index: number) => {
  if (el) {
    inputRefs.value[index] = el;
  }
};

// Convert string to array for easier manipulation
const otpArray = computed(() => {
  return props.modelValue.split("").slice(0, props.length);
});

const onInput = (index: number, event: Event) => {
  const inputEvent = event as InputEvent;
  const target = event.target as HTMLInputElement;
  let value = target.value;

  // Only allow numeric input
  value = value.replace(/[^0-9]/g, "");

  if (inputEvent.inputType === "deleteContentBackward") return;

  // Check if user pasted or browser auto-filled the entire OTP
  if (value.length === props.length && /^\d+$/.test(value)) {
    emit("update:modelValue", value);
    // Focus the last input
    inputRefs.value[props.length - 1]?.focus();
    return;
  }

  // Handle single character input
  if (value.length > 0) {
    // Update the OTP string
    const newOtp = otpArray.value.slice();
    newOtp[index] = value[value.length - 1] || ""; // Take last character if multiple were typed
    emit(
      "update:modelValue",
      newOtp.filter(Boolean).join("").padEnd(props.length, "")
    );

    // Move to next input if available
    if (index < props.length - 1) {
      inputRefs.value[index + 1]?.focus();
    }
  }
};

const onKeyDown = (index: number, event: KeyboardEvent) => {
  // Allow control keys
  const allowedKeys = ["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight"];

  // Block non-numeric keys (except allowed control keys and Cmd/Ctrl combinations)
  if (
    !allowedKeys.includes(event.key) &&
    !/^[0-9]$/.test(event.key) &&
    !event.metaKey &&
    !event.ctrlKey
  ) {
    event.preventDefault();
    return;
  }

  // Handle backspace
  if (event.key === "Backspace") {
    event.preventDefault();
    const newOtp = otpArray.value.slice();

    if (newOtp[index]) {
      // Clear current input
      newOtp[index] = "";
      emit(
        "update:modelValue",
        newOtp.filter(Boolean).join("").padEnd(props.length, "")
      );
    } else if (index > 0) {
      // Move to previous input and clear it
      newOtp[index - 1] = "";
      emit(
        "update:modelValue",
        newOtp.filter(Boolean).join("").padEnd(props.length, "")
      );
      inputRefs.value[index - 1]?.focus();
    }
  }

  // Handle arrow keys
  if (event.key === "ArrowLeft" && index > 0) {
    inputRefs.value[index - 1]?.focus();
  }
  if (event.key === "ArrowRight" && index < props.length - 1) {
    inputRefs.value[index + 1]?.focus();
  }
};

const onPaste = (event: ClipboardEvent) => {
  event.preventDefault();
  const pastedData = event.clipboardData?.getData("text") || "";
  const numericData = pastedData.replace(/[^0-9]/g, "").slice(0, props.length);

  if (numericData) {
    emit("update:modelValue", numericData.padEnd(props.length, ""));
    // Focus the last filled input or the last input
    const focusIndex = Math.min(numericData.length - 1, props.length - 1);
    inputRefs.value[focusIndex]?.focus();
  }
};
</script>

<style scoped>
input {
  width: 75px;
  height: 48px;
  background-color: var(--color-background-input);
  border: 1px solid var(--color-border4) !important;
  border-radius: 8px;
  color: var(--color-black);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--color-black);
}
input.secure {
  -webkit-text-security: disc;
  text-security: disc;
  font-size: 20px;
}
input.success {
  border-color: #29941b !important;
}
input.error {
  border-color: var(--color-error) !important;
  color: var(--color-error);
  &::placeholder {
    color: var(--color-error);
  }
}
</style>
