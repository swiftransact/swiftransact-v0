<template>
    <div class="w-fit">
      <div @click="showSelectModal = !showSelectModal" class="flex items-center gap-1 bg-background-input py-2 px-4 rounded-lg">
          <img :src="selectednetwork?.icon || ''" class="object-contain w-[18px] h-[18px]" />
          <span class="text-text-black uppercase text-xs font-medium">{{ modelValue || 'Select Network' }}</span>
          <icon :name="showSelectModal ? 'arrow_head_up' : 'arrow_head_down'" :size="16" color="var(--color-black)" />
      </div>
      <LazyBottomSlider v-model="showSelectModal" title="Select Network">
          <div class="px-6 py-2  max-h-[350px] overflow-y-auto">
              <div @click="emit('update:modelValue', option.name); showSelectModal = false;" class="flex py-3 items-center gap-2" v-for="option in rechargeNetworks" :key="option.name">
                  <img :src="option.icon" class="w-[34px] h-[34px] object-contain" />
                  <span class="text-base block font-medium text-text-black">{{ option.name }}</span>
              </div>
          </div>
      </LazyBottomSlider>
    </div>
  </template>
  
  <script setup lang="ts">
  import { rechargeNetworks } from '~/utils/constants/appData';
  
  const showSelectModal = ref(false)
  
  const emit = defineEmits<{
      'update:modelValue': [value: typeof rechargeNetworks[number]['name']]
  }>()
  const props = defineProps<{
      modelValue: typeof rechargeNetworks[number]['name']
  }>()

  const selectednetwork = computed(() => rechargeNetworks.find(network => network.name.toLowerCase() === props.modelValue.toLowerCase()))
  </script>
  
  <style  scoped>
  
  </style>