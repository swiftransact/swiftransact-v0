<template>
  <div>
    <!-- Wallet Balance Header -->
    <p class="text-[10px] tracking-[1px] font-medium text-subtext">
      TOTAL WALLET VALUE
    </p>

    <!-- Balance Display -->
    <div class="flex items-baseline gap-4">
      <!-- Visible Balance -->
      <p v-if="seeBalance" class="text-text-black text-[32px] font-semibold">
        <span class="text-[15px] font-semibold">$</span>
        {{ formattedBalance.dollars }}.
        <span class="text-[15px] font-semibold text-subtext">{{ formattedBalance.cents }}</span>
      </p>

      <!-- Hidden Balance -->
      <div v-else class="flex items-baseline gap-2">
        <span class="text-[15px] font-semibold text-subtext">$</span>
        <div 
          v-for="i in 4" 
          :key="`dollar-${i}`" 
          class="hidden-balance bg-text-black w-4 h-4"
        />
        <p class="text-text-black text-[32px] font-semibold">.</p>
        <div 
          v-for="i in 2" 
          :key="`cent-${i}`" 
          class="hidden-balance bg-subtext w-3.5 h-3.5"
        />
      </div>

      <!-- Toggle Balance Visibility -->
      <icon 
        :name="seeBalance ? 'eye-on' : 'eye-off'" 
        :size="16" 
        color="var(--color-black)" 
        @click="toggleBalanceVisibility"
      />
    </div>

    <!-- Connected Wallets -->
    <div class="flex items-center gap-1.5 connected-wallet">
      <div class="flex items-center">
        <div 
          v-for="wallet in walletOptions" 
          :key="wallet.name" 
          :style="{ backgroundColor: wallet.bg }" 
          class="wallet-icon"
        >
          <img 
            :src="wallet.icon" 
            :alt="`${wallet.name} icon`" 
            class="w-3 h-3 object-contain" 
          />
        </div>
      </div>
      <p class="text-[10px] text-text-black opacity-70 font-medium">
        You connected {{ walletOptions.length }} external wallets
      </p>
    </div>

    <!-- Quick Actions -->
    <div class="flex items-center justify-between mt-3">
      <button 
        v-for="action in quickActions" 
        :key="action.label"
        :class="action.btnClass"
      >
        <icon 
          :name="action.icon" 
          :size="20" 
          color="var(--color-black)" 
        />
        <span>{{ action.label }}</span>
      </button>
    </div>

    <divider class="my-5" />

    <!-- Services Section -->
    <p class="text-text-black opacity-70 text-base font-semibold">
      EXPLORE SWIFTRANSACT
    </p>

    <div class="grid mt-6 grid-cols-4 items-start justify-between gap-y-8 ">
      <!-- First Row Services -->
      <div 
        v-for="service in firstRowServices" 
        :key="service.name"
        class="flex flex-col items-center gap-2 text-center"
      >
        <icon-box 
          tint-size="50px" 
          tint-color="var(--color-background5)" 
          :size="24" 
          :name="service.icon" 
          :color="service.color" 
        />
        <p class="text-sm font-semibold text-subtext">{{ service.name }}</p>
      </div>

      <!-- Exchange Rates Card -->
      <div class="col-span-2 bg-card-bg px-4 py-2 rounded-[21px]">
        <p 
          v-for="(rate, index) in exchangeRates" 
          :key="index"
          :class="['text-sm text-nowrap p-2 text-white font-semibold border border-[#1F2C3D] rounded-[21px]', { 'mt-3': index > 0 }]"
        >
          {{ rate }}
        </p>
      </div>

      <!-- Second Row Services -->
      <div 
        v-for="service in secondRowServices" 
        :key="service.name"
        class="flex flex-col items-center gap-2 text-center"
      >
        <icon-box 
          tint-size="50px" 
          tint-color="var(--color-background5)" 
          :size="24" 
          :name="service.icon" 
          :color="service.color" 
        />
        <p class="text-sm font-semibold text-subtext">{{ service.name }}</p>
      </div>
    </div>
    <reward />
  </div>
</template>

<script setup lang="ts">
import { appServices, walletOptions, quickActions } from '~/utils/constants/appData'

definePageMeta({
  layout: 'custom'
})
/******************************* Constants****************************** */
const firstRowServices = appServices.slice(0, 2)
const secondRowServices = appServices.slice(2, 6)

/******************************* Reactive State****************************** */
const seeBalance = ref(true)

/*******************************Mock Data****************************** */
const exchangeRates = ['1 USDC ~ 1,515NGN', '1 USDC ~ 1,515NGN']
const walletBalance = {
  dollars: '100, 450',
  cents: '90'
}
const formattedBalance = computed(() => ({
  dollars: walletBalance.dollars,
  cents: walletBalance.cents
}))

/******************************* Methods****************************** */
const toggleBalanceVisibility = () => {
  seeBalance.value = !seeBalance.value
}
</script>
<style scoped>
.hidden-balance {
  border-radius: 50%;
}

.connected-wallet {
  padding: 7px 12px;
  border-radius: 21px;
  border: 0.4px solid rgba(232, 232, 232, 0.55);
  width: fit-content;
}

.wallet-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  margin-left: -6px;
  border-radius: 50%;
}
</style>