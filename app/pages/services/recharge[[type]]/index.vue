<template>
  <div>
    <Tab class="mb-5" v-model="activeTab" :tabs="['airtime', 'data']" />
    <p class="text-lg text-text-black font-semibold">Network</p>
    <p class="text-sm text-subtext">Choose one network to recharge your number</p>
    
    <div class="grid grid-cols-2 gap-3 mt-4 mb-4">
        <button @click="nav(network)" class="bg-background-input flex items-center justify-between rounded-[8px] p-3.5" v-for="network in rechargeNetworks" :key="network.name">
            <p class="text-text-black text-base font-semibold">{{ network.name }}</p>
            <img :src="network.icon" :alt="network.name" class="w-[31px] h-[31px] object-cover rounded-full" />
        </button>
    </div>
    <button @click="navigateTo('/beneficiaries')" class="text-primary underline text-sm font-semibold text-center mx-auto w-full">Add beneficiaries and top up easily</button>
  </div>
</template>

<script setup lang="ts">
import { rechargeNetworks } from '~/utils/constants/appData';

definePageMeta({
  layout: 'navigation',
  title: 'Recharge & Data',
  showSettings: true,
  validate(route) {
    if(route.params.type){
      return route.params.type === 'airtime' || route.params.type === 'data'
    }
    return true
  },
})
const activeTab = ref('airtime')
const nav = (navItem: typeof rechargeNetworks[number]) => {
  if(activeTab.value === 'airtime') {
    navigateTo(navItem.airtimeTo)
  } else {
    navigateTo(navItem.dataTo)
  }
}
</script>

<style scoped>

</style>