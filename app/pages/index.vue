<template>
    <div class="p-3 flex flex-col gap-2">
        <Toggle v-model="isDark" :label="isDark ? 'Dark Mode' : 'Light Mode'" />
        
        <app-button title="login" :disabled="false" variant="primary" />
        <app-button title="login" :disabled="false" variant="secondary" />
        <app-button title="login" :disabled="false" variant="tertiary" />
        <app-button :onClick="() => showModal = !showModal" :title="showModal ? 'Close' : 'Open'" variant="tertiary" />
        <app-input label="Email" v-model="email" />
        <otp-input v-model="otp" :length="4" :disabled="false" />
        <p class="text-text">OTP: {{ otp }}</p>
        <reward />
        <bottom-slider v-model="showModal"  :modal="modal" />
    </div>
</template>
<script setup lang="ts">
import { useDark } from '@vueuse/core';
import type { Modal } from '~/utils/types/types';

const isDark = useDark();
const email = ref('');
const otp = ref('');
const showModal = ref(false);

const modal: Modal = {
    title: 'Transaction Complete',
    subtitle: 'Your transaction has been completed successfully',
    icon: 'check-mark',
    primaryActionTitle: 'Done',
    primaryAction: () => {
        showModal.value = false;
    },
    secondaryActionTitle: 'Cancel',
    secondaryAction: () => {
        showModal.value = false;
    }
}

</script>
<style scoped>

</style>