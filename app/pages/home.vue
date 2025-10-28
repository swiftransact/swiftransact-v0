<template>
  <div class="h-full">
    <!-- <div> -->
        <p class="text-[10px] tracking-[1px] font-medium text-subtext">TOTAL WALLET VALUE</p>
        <div class="flex items-baseline gap-4 ">
            <top-nav />
            <p class="text-text-black text-[32px] font-semibold">
                <span class="text-[15px] font-semibold">$</span>
                100, 450.
                <span class="text-[15px] font-semibold text-subtext">90</span>
            </p>
            <icon @click="seeBalance = !seeBalance" :name="seeBalance ? 'eye-off' : 'eye-on'" :size="16" :color="isDark ? '#FFF' : '#616161'" />
        </div>
        <p>ss</p>
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
definePageMeta({
  layout: 'custom'
})

const seeBalance = ref(false)
</script>
<style scoped>

</style>