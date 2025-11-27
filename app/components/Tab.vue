<template>
  <div class="flex gap-2">
    <button
      class="capitalize"
      v-for="tab in tabs"
      :key="tab"
      :class="modelValue === tab ? tabClasses.active : tabClasses.inactive"
      @click="emit('update:modelValue', tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: string;
  tabs: string[];
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
const tabClasses = {
  active:
    "bg-primary border-[1.5px] border-border4 h-[27px] center-content p-2.5 rounded-lg font-medium text-sm text-[#F0B9A7]",
  inactive:
    "bg-background-input h-[27px] center-content p-2.5 rounded-lg font-medium text-sm text-text-black",
};
</script>

<style scoped></style>
