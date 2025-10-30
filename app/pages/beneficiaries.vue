<template>
    <div>
      <Tab class="mb-5" v-model="activeTab" :tabs="['Address Book', 'Recently Used']" />
    </div>
  </template>
  
  <script setup lang="ts">
  
  definePageMeta({
    layout: 'navigation',
    title: 'Beneficiaries',
    showSettings: true
  })
  const activeTab = ref('Address Book')
  </script>
  
  <style scoped>
  
  </style>