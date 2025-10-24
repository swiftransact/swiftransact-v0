<template>
    <button @click="toggleDark()" class="test text-white p-2 rounded-md">{{ isDark ? 'Dark' : 'Light' }}</button>
</template>
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<style scoped>
.test{
    background-color: var(--color-background);
    color: var(--color-button);
}
</style>