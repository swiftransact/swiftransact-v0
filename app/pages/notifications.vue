<template>
  <div>
    <Tab class="mb-6" v-model="activeTab" :tabs="['All', 'System']" />
    <div
      class="py-3"
      v-for="notification in notifications"
      :key="notification.date"
    >
      <p class="text-[15px] text-text mb-3">
        {{ formatDate(notification.date).relative }}
      </p>
      <div class="space-y-3">
        <div
          class="py-2"
          v-for="notif in notification.notif"
          :key="notif.title"
        >
          <TransactionBtn />
          <div class="flex items-center mt-2 justify-between">
            <div class="flex items-center gap-5">
              <div class="w-[26.25px] h-[26.25px] relative">
                <img
                  class="w-full h-full rounded-full object-cover object-center"
                  src="/images/usd.png"
                />
                <img
                  class="w-[21.636px] top-[35%] left-[40%] absolute h-[21.636px] rounded-full object-cover object-center"
                  src="/images/bank.png"
                />
              </div>
              <div class="space-y-1">
                <p class="text-text1 text-sm">{{ notif.title }}</p>
                <p class="text-text1 font-medium text-[11px] opacity-50">
                  {{ notif.rate }}
                </p>
              </div>
            </div>
            <div class="space-y-1">
              <p class="text-success-1 text-sm">{{ notif.received }}</p>
              <p class="text-text1 font-medium text-xs opacity-50">
                {{ notif.converted }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { notifications } from "~/utils/constants/mockData";
definePageMeta({
  layout: "navigation",
  title: "Notifications",
  showSettings: true,
});
const activeTab = ref("All");
</script>
