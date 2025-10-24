<template>
    <div class="px-3 flex flex-col gap-2">
        <button @click="toggleDark()" class="text-text p-2 rounded-md">{{ isDark ? 'Dark' : 'Light' }}</button>
        <app-button title="login" :disabled="false" variant="primary" />
        <app-button title="login" :disabled="false" variant="secondary" />
        <app-button title="login" :disabled="false" variant="tertiary" />
        <app-button title="login" :disabled="false" variant="tertiary1" />
        <app-input label="Email" v-model="email" />
        <otp-input v-model="otp" :length="4" :disabled="false" />
        <p>{{ otp }}</p>
        <reward />

    </div>
</template>
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
const email = ref('');
const otp = ref('');


</script>
<style scoped>

</style>