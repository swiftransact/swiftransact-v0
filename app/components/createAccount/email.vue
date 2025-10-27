<template>
  <s-form v-model="isFormValid" @submit="handleSubmit">
    <h3 class="text-2xl font-semibold text-text-black">Enter your E-mail address</h3>
    <p class="text-xs text-subtext">This email address can be used both in mobile app and browser</p>
    <AppInput class="mt-4" :rules="emailRules" v-model="email" placeholder="Enter your email" /> 
    <AppButton class="mt-15" :disabled="!isFormValid" type="submit" title="Continue" />
  </s-form>
</template>

<script setup lang="ts">
import { emailRules } from '~/utils/types/rules';

const emit = defineEmits(['update:step']);
const email = ref('');
const isFormValid = ref(false);

const handleSubmit = () => {
  emit('update:step', 2);
}
</script>

<style scoped>

</style>