<template>
  <div class="flex justify-between items-center top-nav">
    <back-button v-if="title" :title="title" />
    <div v-else>
        <p class="text-sm font-medium text-subtext">Goodmorning</p>
        <p class="text-sm font-semibold text-text-black">Jane Adesuwamin</p>
    </div>
    <slot v-if="slots.right" name="right" />
    <div v-else class="flex items-center gap-4">
        <icon name="notifications" :size="16" color="var(--color-subtext)" />
        <icon name="settings" :size="16" color="var(--color-subtext)" />
        <icon name='box' :size="16" color="#F11DF8" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
}>();
const slots = useSlots();
</script>

<style scoped>
.top-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-background);
    padding-top: calc(var(--top) + 15px);
    padding-left: calc(var(--left) + 20px);
    padding-right: calc(var(--right) + 20px);
    padding-bottom: 15px;
    z-index: 1000;
}
</style>