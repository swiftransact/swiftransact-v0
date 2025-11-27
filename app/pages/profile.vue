<template>
  <div class="min-h-screen bg-[#0b0b0c] text-gray-200 p-2">
    <Toast />

    <div class="max-w-xl mx-auto mt-6 space-y-6">
      <!-- avatar + greeting -->
      <div class="flex flex-col items-center">
        <div
          class="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center"
        >
          <!-- placeholder icon -->
          <Icon name="profile" color="#ffffff"/>
        </div>
        
        <h2 class="mt-4 text-center font-semibold text-lg">
          Hi, Jayne Adesuwami
        </h2>
      </div>

      <!-- transaction data -->
      <h2 class="mt-2 mb-2 font-semibold">
        Transaction Data
      </h2>
      <div
        class="bg-[#0f0f10] border border-[#1f1f1f] rounded-md p-2 space-y-3"
      >
        <div class="grid grid-cols-4 gap-2">
          <div
            v-for="(s, idx) in stats"
            :key="idx"
            class="bg-transparent py-3 px-2 rounded"
          >
            <div class="text-xs text-gray-400 whitespace-nowrap text-center">{{ s.label }}</div>
            <div class="mt-2 font-semibold text-white text-center">{{ s.value }}</div>
          </div>
        </div>
      </div>

      <!-- manage wallet row -->
      <div
        class="bg-[#111213] border border-[#1f1f1f] rounded-md px-2 py-3 flex items-center justify-between"
      >
        <div class="text-sm">Manage all wallet</div>
        <div class="flex items-center gap-2">
          <!-- little icons placeholders -->
          <div
            v-for="wallet in walletOptions"
            :key="wallet.name"
            :style="{ backgroundColor: wallet.bg }"
            class="w-7 h-7 rounded-full flex items-center justify-center -ml-4 first:ml-0 border border-[#111213]"
          >
            <img
              :src="wallet.icon"
              :alt="`${wallet.name} icon`"
              class="w-3.5 h-3.5 object-contain"
            />
          </div>
          <Icon name="play-arrow-right" color="#ffffff" />
        </div>
      </div>

      <!-- personal details-->
      <div
        class="bg-[#0f0f10] border border-[#1f1f1f] rounded-md p-2 mt-4 space-y-3"
      >
        <h3 class="text-sm font-medium">Personal Details</h3>

        <div class="space-y-3">
          <div class="flex items-center gap-3 bg-[#0b0b0c] rounded-md p-3">
            <div
              class="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center"
            >
              <!-- google icon placeholder -->
              <Icon name="google"/>
            </div>
            <div>
              <div class="text-sm font-medium">Email</div>
              <div class="text-xs text-gray-400">{{ user.email }}</div>
            </div>
          </div>

          <div class="flex items-center gap-3 bg-[#0b0b0c] rounded-md p-3">
            <div
              class="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center"
            >
              <!-- phone icon -->
            <Icon name="telephone" color="#0000ff"/>
            </div>
            <div>
              <div class="text-sm font-medium">Phone number</div>
              <div class="text-xs text-gray-400">{{ user.phone }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "~/components/Icon.vue";
import Toast from "~/components/Toast.vue";
import { walletOptions } from "~/utils/constants/appData";
import type { ICON_NAMES, IconName } from "~/utils/types/icons";

definePageMeta({
  layout: "custom",
  title: "My Profile",
});

// mock data
const user = {
  name: "Jayne Adesuwami",
  email: "JayneAdesuwami@gmail.com",
  phone: "91837645321",
};

const stats = [
  { label: "Transaction", value: "20" },
  { label: "Transfer", value: "$1k" },
  { label: "Data / Airtime", value: "$321" },
  { label: "Flights", value: "4" },
];

function goBack() {
  // use Nuxt router to go back
  const router = useRouter();
  router.back();
}

defineProps<{
  user: { email: string; phone: string };
  stats: { label: string; value: string }[];
}>();
</script>
