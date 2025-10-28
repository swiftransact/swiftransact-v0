<template>
    <div class="h-full">
        <Teleport v-if="isMounted" to="#top-nav-right">
            <div class="flex gap-2 items-center p-2 rounded-[64px] max-w-[90px] bg-background-input">
                <img src="/images/coins/phantom.png" alt="phantom" class="w-[16px] h-[16px] object-contain" />
                <span class="text-xs font-medium truncate text-text-black">Phantoms</span>
                <icon @click="showSelectModal = !showSelectModal" :name="showSelectModal ? 'arrow_head_up' : 'arrow_head_down'" :size="16" color="var(--color-black)" />
            </div>
        </Teleport>

        <LazyBottomSlider v-model="showSelectModal" title="Select Wallet">
            <div class="px-6 py-2 max-h-[350px] overflow-y-auto">
                <div class="flex py-3 items-center gap-2" v-for="option in walletOptions" :key="option.name">
                    <img :src="option.icon" :alt="option.name" class="w-[34px] h-[34px] object-contain" />
                    <div>
                        <span class="text-base block font-medium text-text-black">{{ option.name }}</span>
                        <span class="text-xs block text-subtext">Balance: $200.00</span>
                    </div>
                </div>
            </div>
        </LazyBottomSlider>
    </div>
  </template>
  
  <script setup lang="ts">
  import { walletOptions } from '~/utils/constants/appData'

  const isMounted = ref(false)
  onMounted(() => {
    isMounted.value = true
  })
  const showSelectModal = ref(false)
  definePageMeta({
    layout: 'custom',
    title: 'Transfer'
  })
  </script>
  <style scoped>
  
  </style>