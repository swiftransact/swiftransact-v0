<template>
    <button :disabled="disabled" :class="variant" :type="type">
        <icon v-if="prependIcon" :name="prependIcon" :size="18" :color="iconColor" />
        <span v-if="!loading">{{ title }}</span>
        <Loader v-else />
        <icon v-if="appendIcon" :name="appendIcon" :size="18" :color="iconColor" />
    </button>
</template>

<script setup lang="ts">
import type { IconName } from '~/utils/types/icons';
const props = withDefaults(defineProps<{
    title: string;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'tertiary1' | 'info';
    disabled?: boolean;
    loading?: boolean;
    type?: 'submit' | 'button';
    prependIcon?: IconName;
    appendIcon?: IconName;
    iconColor?: string;
}>(), {
    disabled: false,
    loading: false,
    variant: 'primary',
    type: 'button'
})
</script>
<style scoped>
button{
    height: 48px;
    padding: 10px;
    border-radius: 65px;
    font-size: 18px;
    font-weight: 600;
    width: 100%;
    text-wrap: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
button:disabled{
    opacity: 0.5;
    cursor: not-allowed;
}
button:hover {
    opacity: 0.5;
}
.primary{
    background-color: var(--color-primary);
    color: #FFFFFF;
}
.secondary{
    background-color: var(--color-secondary-button);
    color: #FFFFFF;
}
.tertiary{
    background-color: var(--color-background1);
    color: var(--color-tertiary-text);
}
.tertiary1{
    background-color: var(--color-background2);
    color: var(--color-text-black);
}
.info{
    background-color: var(--color-info);
    color: #3F0E0B;
}
</style>