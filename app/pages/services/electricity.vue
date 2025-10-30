<template>
    <div class="flex flex-col items-center mt-[20%]">
        <select-prepaid class="w-fit" v-model="selectedProvider" />
        <div class="flex items-center gap-2 mt-8">
            <icon-box name="profile" color="black" :size="12" tint-size="20px" tint-color="#757575" />
            <span class="text-text-black text-sm opacity-70">Meter Number</span>
        </div>
        <input
            v-model="meterNumber"
            inputmode="numeric"
            placeholder="Meter number"
            class="text-[32px] text-center mt-3"
            maxlength="10"
            minlength="10"
            pattern="[0-9]"
         />
         <div class="my-8 flex items-center justify-center gap-2">
            <span class="text-text-black text-3xl font-bold">&#8358;</span>
            <input
                v-model="amount"
                inputmode="numeric"
                placeholder="Enter Amount"
                class="text-[20px] text-center"
                maxlength="10"
                minlength="10"
                pattern="[0-9]"
            />
         </div>
         <app-button :disabled="!meterNumber || !amount" title="Confirm & Pay" />
    </div>
  </template>
  
  <script setup lang="ts">
  
  definePageMeta({
    layout: 'navigation',
    title: 'Buy Electricity',
    showWallet: true
  })
  const selectedProvider = ref('')
  const meterNumber = ref('')
  const amount = ref()
  </script>
  <style scoped>
  input{
    color: var(--color-text-black);
    &::placeholder{
        color: var(--color-text-black);
        opacity: 0.66;
    }
  }
  </style>