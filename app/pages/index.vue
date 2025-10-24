<template>
    <div class="p-3 flex flex-col gap-2">
        <Toggle v-model="isDark" :label="isDark ? 'Dark Mode' : 'Light Mode'" />
        
        <app-button title="login" :disabled="false" variant="primary" />
        <app-button title="login" :disabled="false" variant="secondary" />
        <app-button title="login" :disabled="false" variant="tertiary" />
        <app-button title="login" :disabled="false" variant="tertiary1" />
        <app-input label="Email" v-model="email" />
        <otp-input v-model="otp" :length="4" :disabled="false" />
        <p class="text-text">OTP: {{ otp }}</p>
        <reward />

    </div>
</template>
<script setup lang="ts">
import { useDark } from '@vueuse/core';

const isDark = useDark();
const email = ref('');
const otp = ref('');


</script>
<style scoped>

</style>