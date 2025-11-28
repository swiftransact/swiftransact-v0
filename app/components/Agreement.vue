<template>
  <p v-if="!encrypted" class="text-text1 text-center text-xs shrink-0">By continuing, you agree to <span class="text-primary">Swiftransact</span> Terms and privacy policy</p>
  <div v-else>
    <icon name='check-mark' :size="16" color="#9CA3AF" />
    <p class="text-xs font-light text-subtext text-center">Encrypted and Secure</p>
    <p class="text-xs font-light text-subtext text-center">You’re in control. Disconnect wallet at any time</p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  encrypted?: boolean
}>(), {
  encrypted: false
})
</script>
