<template>
  <s-form v-model="isFormValid" @submit="handleSubmit">
    <h3 class="text-2xl font-semibold text-text-black">Create Password</h3>
    <p class="text-xs text-subtext">This Password can be used both in mobile app and browser</p>
    <div class="mt-4 flex flex-col gap-3">
      <AppInput :rules="passwordRules" type="password" v-model="formData.password" placeholder="New Password" /> 
      <AppInput :rules="passwordRules" type="password" v-model="formData.confirmPassword" placeholder="Confirm Password" /> 
      <CheckBox v-model="formData.rememberMe" label="Remember me" />
    </div>
    <AppButton class="mt-15" :disabled="!isFormValid" type="submit" title="Continue" />
  </s-form>
</template>

<script setup lang="ts">
import { passwordRules } from '~/utils/types/rules';
import CheckBox from '~/components/CheckBox.vue';

const emit = defineEmits(['update:step']);

const formData = reactive({
  password: '',
  confirmPassword: '',
  rememberMe: false
});
const isFormValid = ref(false);
const handleSubmit = () => {
  emit('update:step', 3);
}
</script>

<style scoped>

</style>