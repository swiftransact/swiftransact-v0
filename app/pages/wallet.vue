<template>
  <div class="h-full w-full px-6 py-5 flex flex-col">
    <back-button
      class="my-[20%]"
      icon-name="back"
      text-style="text-xs text-text-black"
    />
    <div class="flex-1">
      <connect-wallet settings />
    </div>
    <agreement :encrypted="true" class="mt-auto" />
  </div>
</template>

<script setup lang="ts">
import connectWallet from "~/components/createAccount/connectWallet.vue";
</script>
