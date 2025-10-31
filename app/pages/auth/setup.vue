<template>
  <div class="h-full w-full pb-5 px-6 pt-[35%] flex flex-col gap-8 items-center">
      <img :src="isDark ? '/images/icon-dark.jpg' : '/images/icon.jpg'" alt="logo" class="w-[62px] h-[56px] object-contain" />
      <p class="text-2xl font-semibold text-text-black">Let’s Set up your profile</p>
      <button class="text-lg text-text-black font-semibold leading-5.5">Sign up with Wallet</button>
      <button @click="signUpWithEmail" class="text-lg text-text-black font-semibold leading-5.5">Sign up with Email</button>
      <div class="flex items-center gap-2 w-full">
          <divider class="flex-1" />
          <p class="text-text-black text-sm">Or</p>
          <divider class="flex-1" />
      </div>
      <icon name="google" :size="28" />
      <agreement class="mt-auto" />
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core';

const isDark = useDark();

const signUpWithWallet = () => {
  goTo('/auth/signup');
}

const signUpWithEmail = () => {
  goTo('/auth/signup');
}
</script>

<style scoped>

</style>