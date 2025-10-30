<template>
    <div>
      <div @click="showSelectModal = !showSelectModal" class="flex items-center gap-4 bg-background-input py-1 px-4 rounded-lg">
          <span class="text-text-black text-base font-medium">{{ modelValue || 'Select' }}</span>
          <icon :name="showSelectModal ? 'arrow_head_up' : 'arrow_head_down'" :size="16" color="var(--color-black)" />
      </div>
      <LazyBottomSlider v-model="showSelectModal" title="Select Electricity Provider">
          <div class="px-6 py-2  max-h-[350px] overflow-y-auto">
              <div @click="emit('update:modelValue', option.value); showSelectModal = false;" class="flex py-3 items-center gap-2" v-for="option in nigerianElectricityProviders" :key="option.value">
                  <img :src="option.img" class="w-[34px] h-[34px] rounded-full object-cover" />
                  <span class="text-base block font-medium text-text-black">{{ option.name }}</span>
              </div>
          </div>
      </LazyBottomSlider>
    </div>
  </template>
  
  <script setup lang="ts">
  import { nigerianElectricityProviders } from '~/utils/constants/appData';
  const showSelectModal = ref(false)
  
  const emit = defineEmits<{
      'update:modelValue': [value: string]
  }>()
  const props = defineProps<{
      modelValue: string
  }>()
  </script>
  
  <style  scoped>
  
  </style>