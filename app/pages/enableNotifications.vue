<template>
  <s-app class="h-full w-full flex-col">
    <div
      class="text-center flex-1 px-6 pt-5 flex justify-center items-center flex-col gap-2"
    >
      <Icon color="#FF9A79" :size="88" name="bell" />
      <h3 class="text-2xl font-semibold text-text-black">
        Enable Notifications
      </h3>
      <p class="text-xs text-subtext">
        You’ll receive personalize notifications on all transactions, mobile
        updates and alerts
      </p>
    </div>
    <div class="px-6 pb-5">
      <app-button
        @click="goTo('/settings')"
        title="Enable Notifications"
        variant="primary"
      />
      <button
        @click="replace('/home')"
        class="text-primary p-2.5 text-base font-semibold w-full text-center"
      >
        Skip
      </button>
    </div>
  </s-app>
</template>

<script setup lang="ts"></script>

<style scoped></style>
