<template>
  <div>
    <div class="flex items-center justify-center gap-2 mt-8">
      <icon-box
        name="profile"
        color="black"
        :size="12"
        tint-size="20px"
        tint-color="#757575"
      />
      <span class="text-text-black text-sm opacity-70">{{ label }}</span>
    </div>
    <input
      :modelValue="modelValue"
      @input="handleInput"
      inputmode="numeric"
      :placeholder="placeholder"
      class="text-[32px] w-full text-center mt-3"
      :maxlength="maxlength"
      :minlength="minlength"
      :pattern="pattern"
    />
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["update:modelValue"]);
const props = withDefaults(
  defineProps<{
    placeholder?: string;
    modelValue: string | number;
    label: string;
    maxlength?: number;
    minlength?: number;
    pattern?: string;
  }>(),
  {
    maxlength: 10,
    minlength: 10,
    pattern: "[0-9]*",
  }
);
const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const numericValue = input.value.replace(/[^0-9]/g, "");
  if (numericValue.length > props.maxlength) {
    input.value = numericValue.slice(0, props.maxlength);
    return;
  }
  input.value = numericValue;
  emit("update:modelValue", numericValue);
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
