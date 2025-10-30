<template>
    <div>
        <div @click="showSelectModal = !showSelectModal" class="flex gap-2 items-center p-2 rounded-lg max-w-[90px] bg-background-input">
            <img src='/images/coins/phantom.png' alt="phantom" class="w-[16px] h-[16px] object-contain" />
            <span class="text-xs font-medium truncate text-text-black">Phantoms</span>
            <icon :name="showSelectModal ? 'arrow_head_up' : 'arrow_head_down'" :size="16" color="var(--color-black)" />
        </div>
      <LazyBottomSlider v-model="showSelectModal" title="Select Wallet">
            <div class="px-6 py-2 max-h-[350px] overflow-y-auto">
                <div @click="handleSelectWallet(option.name)" class="flex py-3 items-center gap-2" v-for="option in walletOptions" :key="option.name">
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
  import { useAppStore } from '~/store/app';
  import { walletOptions } from '~/utils/constants/appData'
  
  const { selectedWallet } = storeToRefs(useAppStore())
  const showSelectModal = ref(false)
  
  const handleSelectWallet = (wallet: string) => {
    selectedWallet.value = wallet
    showSelectModal.value = false
  }
  </script>
  
  <style  scoped>
  
  </style>