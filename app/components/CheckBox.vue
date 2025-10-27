<template>
  <div>

  </div>
    <div class="checkbox-container">
      <input
        class="form-check-input checkbox"
        :checked="modelValue"
        @change="emit('update:modelValue', ($event.target as HTMLInputElement)?.checked ?? false)"
        :id="id"
        type="checkbox"
      /><label class="label" :for="id">{{ label }}</label>
    </div>
    </template>
    
    <script setup lang="ts">
    import { computed } from 'vue'
    
    const emit = defineEmits(['update:modelValue'])
    const props = withDefaults(defineProps<{
      modelValue: boolean
      disabled?: boolean
      id?: string
      size?: string
      color?: string
      label?: string
    }>(), {
      id: () => `checkbox-${Math.random().toString(36).substring(2, 9)}`,
      disabled: false,
      size: '20px',
      color: 'var(--color-success)',

    })
    // Calculate font size as 62.5% of the checkbox size (10px for 16px default)
    const fontSize = computed(() => {
      const numericSize = parseFloat(props.size)
      const unit = props.size.replace(/[\d.]/g, '')
      return `${(numericSize * 0.625).toFixed(1)}${unit}`
    })
    </script>
    
    <style scoped>
     .checkbox-container {
      transition: all 0.3s ease;
     }
    .checkbox-container input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    }

    .checkbox-container label {
    cursor: pointer;
    display: flex;
    color: #e4e4e4;
    font-size: 12px;
    }

    .checkbox-container label::before {
    content: '';
    background-color: var(--color-background1);
    border-radius: 4px;
    margin-right: 10px;
    width: v-bind(size) !important;
    height: v-bind(size) !important;
    }

    .checkbox-container input[type='checkbox']:checked + label::before {
    content: '\002714';
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffffd9;
    font-size: v-bind(fontSize);
    background-color: v-bind(color);
    }
    .label{
      font-size: 12px;
      color: var(--color-text1) !important;
    }
    </style>
    
    