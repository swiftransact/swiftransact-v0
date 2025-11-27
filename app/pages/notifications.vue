<template>
  <div>
    <Tab v-model="activeTab" :tabs="['All', 'System']" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "navigation",
  title: "Notifications",
  showSettings: true,
});
const activeTab = ref("All");
</script>
