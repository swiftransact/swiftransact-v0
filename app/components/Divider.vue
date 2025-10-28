<template>
  <div class="separator" :style="customStyles"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'var(--color-background-input)',
  },
  height: {
    type: String,
    default: '1px',
  },
})

const customStyles = computed(() => ({
  height: props.height,
  backgroundColor: props.color,
}))
</script>

<style scoped>
.separator {
  display: block;
  width: 100%;
  border: none;
}
</style>