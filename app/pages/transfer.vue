<template>
    <div class="">
        <Tab v-model="activeTab" :tabs="['transfer', 'history']" />
        <div class="flex items-center gap-2 mt-4">
            <IconBox name="profile" color="black" :size="12" tint-size="20px" tint-color="#1DDB04" />
            <h4>Receipients</h4>
        </div>
        <SelectBank class="mt-5" v-model="bankDetails" />
        <div class="border-background-input border rounded-[12px] mt-4 w-full p-4">
            <div class="bg-background2 flex justify-between items-center rounded-[8px] p-2 relative">
                <div class="flex flex-col gap-3">
                    <p class="text-[13px] text-subtext">I want to receive</p>
                    <h3>100,000</h3>
                    <p class="text-[13px] text-subtext">Min. 100,000NGN</p>
                </div>
                <div class="flex items-center gap-2 bg-background-input py-2 px-4 rounded-lg">
                    <img src="/images/coins/naira.png" class="object-contain w-5 h-5" />
                    <span class="text-text-black text-base font-medium">NGN</span>
                </div>
                <div class="p-2 absolute top-[90%] left-1/2 -translate-x-1/2 border border-background1 rounded-[8px] bg-background2">
                    <Icon name='convert' :size="20" color="var(--color-black)" />
                </div>
            </div>
            <div class="bg-background2 flex justify-between items-center mt-2 rounded-[8px] p-2">
                <div class="flex flex-col gap-3">
                    <p class="text-[13px] text-subtext">We’ll deduct</p>
                    <h3>$50.2</h3>
                    <p class="text-[13px] text-subtext">Bal</p>
                </div>
                <select-coin v-model="selectedCoin" />
            </div>
            <div class="bg-background2 text-text-black text-[11px] text-center mt-2 rounded-[8px] p-1">
                1 USDC = 1,525NGN
            </div>
        </div>
        <AppButton @click="handleContinue" title="Continue" class="mt-4"/>
        <!-- modals -->
         <LazyBottomSlider @update:model-value="activeModal = null" :modal="modal!" v-model="activeModal" />
    </div>
  </template>
  
  <script setup lang="ts">
  import type { BankAccountDetails } from '~/components/SelectBank.vue'
import type { Modal } from '~/utils/types/types'

  definePageMeta({
      layout: 'custom',
      title: 'Transfer',
      showWallet: true,
    })
    const activeTab = ref('transfer')
    const selectedCoin = ref('USDC')
    const bankDetails = ref<BankAccountDetails | null>(null)
    const activeModal = ref<'success' | 'error' | 'processing' | null>(null)

    const handleContinue = () => {
        activeModal.value = 'processing'
        setTimeout(() => {
            activeModal.value = 'error'
            setTimeout(() => {
                activeModal.value = 'success'
            }, 1500);
        }, 1500);
    }

    const processingModal:Modal = {
        title: 'Processing transaction',
        icon: 'gear-loader',
        primaryActionTitle: 'Processing transaction',
        primaryAction: () => {
            activeModal.value = null
        }
    }
    const errorModal:Modal = {
        title: 'There is a problem',
        subtitle: 'Please ensure you have a data connection and try again',
        icon: 'warning',
        primaryActionTitle: 'Try again',
        primaryAction: () => {
            activeModal.value = null
        },
        secondaryActionTitle: 'Close',
        secondaryAction: () => {
            activeModal.value = null
        }
    }
    const transferSuccessModal:Modal = {
        title: 'Transaction Complete',
        icon: 'check-mark',
        primaryActionTitle: 'View receipt',
        primaryAction: () => {
            goTo(`/receipts/transfer`)
        },
        secondaryActionTitle: 'Close',
        secondaryAction: () => {
            activeModal.value = null
        }
    }
    const modal: ComputedRef<Modal | null> = computed(() => {
        if (activeModal.value === 'processing') return processingModal
        if (activeModal.value === 'error') return errorModal
        if (activeModal.value === 'success') return transferSuccessModal
        return null
    })
    </script>
  <style scoped>
  
  </style>