<template>
  <div>
    <h3 class="text-2xl font-semibold text-text-black">Enter phone number</h3>
    <p class="text-xs text-subtext">Enter your number to receive a confirmation code</p>
    <s-phone-input class="mt-4" @update:isValid="isValid = $event" v-model="phoneNumber" />
    <AppButton :disabled="!isValid || !phoneNumber" class="mt-15" @click="handleSubmit" title="Continue" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:step']);
const phoneNumber = ref('');
const isValid = ref(false);
const handleSubmit = () => {
  emit('update:step', 4);
}
</script>

<style scoped>

</style>