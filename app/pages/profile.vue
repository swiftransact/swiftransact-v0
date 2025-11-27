<template>
  <div class="h-full pb-6">
    <!-- avatar + greeting -->
    <div class="flex flex-col items-center">
      <IconBox
        tint-color="var(--color-background2)"
        name="profile"
        color="#F11DF8"
        tint-size="75px"
        :size="24"
      />
      <h2 class="mt-4 text-text text-center font-semibold text-lg">
        Hi, Jayne Adesuwami
      </h2>
    </div>

    <!-- transaction data -->
    <h2 class="mt-5 mb-2 text-text font-semibold">Transaction Data</h2>
    <div class="card-bg bg-surface rounded-md mb-4 p-2 space-y-3">
      <div class="grid grid-cols-4 gap-2">
        <div
          v-for="(s, idx) in stats"
          :key="idx"
          class="bg-transparent py-3 px-2 rounded"
        >
          <div class="text-xs text-subtext whitespace-nowrap text-center">
            {{ s.label }}
          </div>
          <div class="mt-2 font-semibold text-text text-center">
            {{ s.value }}
          </div>
        </div>
      </div>
    </div>

    <!-- manage wallet row -->
    <div
      class="card-bg bg-surface rounded-md px-2 py-3 flex items-center justify-between"
    >
      <div class="text-sm text-subtext">Manage all wallet</div>
      <div class="flex items-center gap-2">
        <!-- little icons placeholders -->
        <div
          v-for="wallet in walletOptions"
          :key="wallet.name"
          :style="{ backgroundColor: wallet.bg }"
          class="w-7 h-7 rounded-full center-content -ml-4 first:ml-0 border border-[#111213]"
        >
          <img
            :src="wallet.icon"
            :alt="`${wallet.name} icon`"
            class="w-3.5 h-3.5 object-contain"
          />
        </div>
        <IconBox
          tint-color="var(--color-background1)"
          tint-size="30px"
          name="play-arrow-right"
          color="var(--color-text)"
          @click="goTo('/wallet')"
        />
      </div>
    </div>

    <!-- personal details-->
    <h3 class="text-[15px] font-medium my-4">Personal Details</h3>
    <div class="card-bg bg-surface rounded-md p-2 mt-2 space-y-1">
      <div
        v-for="detail in personalDetails"
        :key="detail.label"
        class="flex items-center gap-3 p-3"
      >
        <div
          class="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center"
        >
          <Icon :color="detail.color" :name="detail.icon as IconName" />
        </div>
        <div>
          <div class="text-sm font-medium text-text">
            {{ detail.label }}
          </div>
          <div class="text-xs text-subtext">{{ detail.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { walletOptions } from "~/utils/constants/appData";
import type { IconName } from "~/utils/types/icons";
import { personalDetails, stats } from "~/utils/constants/mockData";

definePageMeta({
  layout: "custom",
  title: "My Profile",
});
</script>
