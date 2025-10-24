<template>
  <div class="toggle-wrapper" :class="orientation">
    <label v-if="label" class="text-text text-base font-medium">{{ label }}</label>
    <button
      type="button"
      role="switch"
      :aria-checked="modelValue"
      :disabled="disabled"
      class="toggle-switch"
      :class="{ 'active': modelValue, 'disabled': disabled }"
      @click="toggle"
    >
      <span class="toggle-slider"></span>
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<{
  modelValue: boolean
  disabled?: boolean
  label?: string
  orientation?: 'vertical' | 'horizontal'
}>(), {
  disabled: false,
  orientation: 'horizontal'
})

const toggle = () => {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}
</script>

<style scoped>
.toggle-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: fit-content;
}

.toggle-wrapper.horizontal {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
}

.toggle-switch {
  position: relative;
  display: flex;
  align-items: center;
  width: 2.2rem;
  height: 1.2rem;
  background-color: transparent;
  border: 2px solid var(--color-primary);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 2px;
  flex-shrink: 0;
}

.toggle-switch.active {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.toggle-switch.disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.toggle-slider {
  width: 0.7rem;
  height: 0.7rem;
  background-color: var(--color-primary);
  border-radius: 50px;
  transition: all 0.3s ease;
}

.toggle-switch.active .toggle-slider {
  transform: translateX(130%);
  background-color: #FFF;
}
  
/* Dark mode support */
.dark .toggle-switch {
  border-color: var(--color-primary);
  background-color: #FFF;
}

.dark .toggle-slider {
  background-color: var(--color-primary);
}

.dark .toggle-switch.active {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.dark .toggle-switch.active .toggle-slider {
  background-color: #FFF;
}
</style>