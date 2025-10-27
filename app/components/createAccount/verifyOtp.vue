<template>
  <div>
    <h3 class="text-2xl font-semibold text-text-black">Enter the code sent to</h3>
    <p class="text-xs text-subtext">Enter the code sent to +2348192734</p>
    <div class="mt-4">
      <OtpInput v-model="otp" />
      <p class="text-xs text-subtext mt-3">
        Resend code in {{ formattedTime }}
        <span class="text-error ml-1">Change number</span>
      </p>
    </div>
    <AppButton :disabled="disabled" class="mt-15" @click="handleSubmit" title="Continue" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:step']);

const otp = ref('');
const countdown = ref(1 * 60)
const intervalId = ref<number | null>(null)
const isCodeExpired = ref(false)

const handleSubmit = () => {
  emit('update:step', 5);
}

function startCountdown() {
  if (intervalId.value) clearInterval(intervalId.value)

  countdown.value = 1 * 60 // Reset countdown to 2 minutes
  isCodeExpired.value = false // Reset expiration status

  intervalId.value = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--
    } else {
      if (intervalId.value) clearInterval(intervalId.value)
      isCodeExpired.value = true // Mark code as expired
    }
  }, 1000)
}
const disabled = computed(() => {
  return otp.value.length !== 4
})
const formattedTime = computed(() => {
  const minutes = Math.floor(countdown.value / 60)
  const seconds = countdown.value % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})
</script>

<style scoped>

</style>