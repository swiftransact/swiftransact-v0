<template>
    <button :disabled="disabled" :class="variant" @click="onClick">
        <span v-if="!loading">{{ title }}</span>
        <Loader v-else />
    </button>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    title: string;
    variant: 'primary' | 'secondary' | 'tertiary' | 'tertiary1' | 'info';
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
}>(), {
    disabled: false,
    loading: false,
    onClick: () => {}
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
    color: var(--color-black);
}
</style>