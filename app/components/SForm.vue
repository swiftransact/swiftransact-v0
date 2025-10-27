<template>
  <form @submit.prevent="handleSubmit">
    <slot />
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue', 'submit']);

const props = withDefaults(defineProps<{
  modelValue?: boolean
}>(), {
  modelValue: false
});

// Store all registered inputs and their validation states
const inputs = reactive<Map<symbol, Ref<boolean>>>(new Map());

const registerInput = (id: symbol, isValid: Ref<boolean>) => {
  inputs.set(id, isValid);
  updateFormValidity();
};

const unregisterInput = (id: symbol) => {
  inputs.delete(id);
  updateFormValidity();
};

// Provide context to child inputs
provide('formContext', {
  registerInput,
  unregisterInput
});

// Compute overall form validity
const isValid = computed(() => {
  if (inputs.size === 0) return true;
  return Array.from(inputs.values()).every(inputValid => inputValid.value);
});

// Watch for changes and emit to parent
const updateFormValidity = () => {
  nextTick(() => {
    emit('update:modelValue', isValid.value);
  });
};

// Watch the computed isValid and emit changes
watch(isValid, (newValue) => {
  emit('update:modelValue', newValue);
}, { immediate: true });

const handleSubmit = () => {
  if (isValid.value) {
    emit('submit');
  }
};

defineExpose({
  isValid
});
</script>
