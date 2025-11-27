<template>
  <div class="flex justify-between items-center top-nav">
    <span v-if="title" class="text-base font-semibold text-text-black">{{
      title
    }}</span>
    <div v-else>
      <p class="text-sm font-medium text-subtext">Goodmorning</p>
      <p class="text-sm font-semibold text-text-black">Jane Adesuwamin</p>
    </div>
    <div class="flex items-center gap-4">
      <select-wallet v-if="showWallet" />
      <slot v-if="right" name="right" />
      <template v-if="showDefaultActions">
        <icon
          @click="goTo('/notifications')"
          name="notifications"
          :size="16"
          color="var(--color-subtext)"
        />
        <icon
          @click="goTo('/settings')"
          name="settings"
          :size="16"
          color="var(--color-subtext)"
        />
        <icon name="box" :size="16" color="#F11DF8" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    right?: boolean;
    showWallet?: boolean;
    showDefaultActions?: boolean;
  }>(),
  {
    showDefaultActions: false,
  }
);
</script>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-background);
  padding-top: calc(var(--top) + 15px);
  padding-left: calc(var(--left) + 20px);
  padding-right: calc(var(--right) + 20px);
  padding-bottom: 15px;
  z-index: 100;
}
</style>
