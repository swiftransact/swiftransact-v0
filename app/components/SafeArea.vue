<template>
  <div :class="position">
    <!-- -->
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  position?: 'top' | 'bottom'
  backgroundColor?: string
}>(), {
  position: 'top',
  backgroundColor: 'var(--color-background)'
})
</script>
<style scoped>
  .top {
    height: constant(safe-area-inset-top); 
    height: env(safe-area-inset-top);
    background: v-bind(backgroundColor);
    position: fixed ;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  .bottom {
  height: env(safe-area-inset-bottom);
  background: v-bind(backgroundColor);
    }
</style>
