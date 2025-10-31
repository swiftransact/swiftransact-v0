<template>
    <div class=" min-h-screen flex flex-col">
      <Tab v-model="activeTab" :tabs="['Address Book', 'Recently Used']" />
      <!-- if no beneficiaries -->
      <div class="flex-1 flex flex-col items-center justify-center" v-if="!beneficiaries.length">
        <p class="text-text-black text-center text-lg font-semibold">You do not have any saved beneficiary</p>
        <button class="text-primary text-center mx-auto w-full text-lg font-semibold">Add beneficiary</button>
      </div>
      <div class="mt-5" v-else>
        <div class="flex items-center gap-2 py-3" v-for="beneficiary in beneficiaries" :key="beneficiary.name">
          <img :src="beneficiary.img" alt="beneficiary image" class="w-10 h-10 object-cover rounded-full" />
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <p class="text-text-black text-base font-medium">{{ beneficiary.name }}</p>
              <span :style="{ backgroundColor: providerColors[beneficiary.provider as keyof typeof providerColors] }" class="text-white rounded-[2px] font-medium text-xs uppercase px-2.5">{{ beneficiary.provider }}</span>
            </div>
            <p class="text-subtext text-xs">{{ beneficiary.phone }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  definePageMeta({
    layout: 'navigation',
    title: 'Beneficiaries',
    showSettings: true
  })
  const activeTab = ref('Address Book')
  const beneficiaries = ref([
    {
      name: 'John Doe',
      phone: '+2348123456789',
      img: '/images/mock/profile.png',
      provider: 'mtn',
    },
    {
      name: 'Jane Doe',
      phone: '+2348123456789',
      img: '/images/mock/profile1.png',
      provider: 'glo',
    },
    {
      name: 'Joseph',
      phone: '+2348123456789',
      img: '/images/mock/profile2.png',
      provider: 'airtel',
    }
  ])
  const providerColors = {
    mtn: 'var(--color-mtn)',
    glo: 'var(--color-glo)',
    airtel: 'var(--color-airtel)',
    '9mobile': 'var(--color-9mobile)',
  }
  </script>
  
  <style scoped>
  
  </style>