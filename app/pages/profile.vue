<template>
  <div class="min-h-screen bg-[#0b0b0c] text-gray-200 p-4">
    <Toast />

    <div class="max-w-xl mx-auto mt-6 space-y-6">
      <!-- avatar + greeting -->
      <div class="flex flex-col items-center">
        <div
          class="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center"
        >
          <!-- placeholder icon -->
          <svg
            class="w-9 h-9 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 20c0-3.313 2.687-6 6-6s6 2.687 6 6"
            />
          </svg>
        </div>
        <h2 class="mt-4 text-center font-semibold text-lg">
          Hi, Jayne Adesuwami
        </h2>
      </div>

      <!-- transaction data -->
      <div
        class="bg-[#0f0f10] border border-[#1f1f1f] rounded-md p-4 space-y-3"
      >
        <div class="grid grid-cols-4 gap-3">
          <div
            v-for="(s, idx) in stats"
            :key="idx"
            class="bg-transparent py-3 px-2 rounded"
          >
            <div class="text-xs text-gray-400">{{ s.label }}</div>
            <div class="mt-2 font-semibold text-white">{{ s.value }}</div>
          </div>
        </div>
      </div>

      <!-- manage wallet row -->
      <div
        class="bg-[#111213] border border-[#1f1f1f] rounded-md px-4 py-3 flex items-center justify-between"
      >
        <div class="text-sm">Manage all wallet</div>
        <div class="flex items-center gap-2">
          <!-- little icons placeholders -->
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
          <div class="w-6 h-6 bg-slate-700 rounded-full"></div>
          <div class="w-6 h-6 bg-slate-700 rounded-full"></div>
          <div class="w-6 h-6 bg-slate-700 rounded-full"></div>
          <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <!-- personal details-->
      <div
        class="bg-[#0f0f10] border border-[#1f1f1f] rounded-md p-4 mt-4 space-y-3"
      >
        <h3 class="text-sm font-medium">Personal Details</h3>

        <div class="space-y-3">
          <div class="flex items-center gap-3 bg-[#0b0b0c] rounded-md p-3">
            <div
              class="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center"
            >
              <!-- google icon placeholder -->
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="..." />
              </svg>
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
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="..." />
              </svg>
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
// import TransactionGrid from '~/components/TransactionGrid.vue'
// import PersonalDetails from '~/components/PersonalDetails.vue'
import Toast from "~/components/Toast.vue";
import { walletOptions } from "~/utils/constants/appData";

definePageMeta({
  layout: "custom",
  title: "My Profile",
});

// mock data while learning
const user = {
  name: "Jayne Adesuwami",
  email: "JayneAdesuwami@gmail.com",
  phone: "91837645321",
};

const stats = [
  { label: "Transaction", value: "20" },
  { label: "Transfer", value: "$1k" },
  { label: "D/A Purchased", value: "$321" },
  { label: "Flight Booked", value: "4" },
];

function goBack() {
  // use Nuxt router to go back
  const router = useRouter();
  router.back();
}

defineProps<{ user: { email: string; phone: string }; stats: {label: string; value: string}[]}>();
</script>
