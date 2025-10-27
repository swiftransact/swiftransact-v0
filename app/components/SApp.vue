<template>
  <div class="swift-container">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  backgroundColor?: string
}>(), {
  backgroundColor: 'var(--color-background)'
})
</script>
<style scoped>
.swift-container{
    background-color: v-bind(backgroundColor);
    position: fixed;
    max-width: 430px;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh; /* Fallback for older browsers */
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    display: flex;
    overflow: hidden;
    overscroll-behavior: none; /* Prevents pull-to-refresh and overscroll */
    touch-action: pan-x pan-y;
}

/* Use small viewport height for stable PWA experience - prevents expansion when scrolling */
@supports (height: 100svh) {
    .swift-container {
        height: 100svh;
    }
}
</style>