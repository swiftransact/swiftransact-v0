<template>
  <div class="absolute star-wrapper" :style="positionStyles">
    <icon name="star" :size="size" :color="color" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: Number,
    default: 20,
  },
  color: {
    type: String,
    default: "#EA4E1B",
  },
  left: {
    type: String,
    default: undefined,
  },
  right: {
    type: String,
    default: undefined,
  },
  top: {
    type: String,
    default: undefined,
  },
  bottom: {
    type: String,
    default: undefined,
  },
});

const positionStyles = computed(() => {
  const styles: Record<string, string> = {};

  if (props.left) styles.left = props.left;
  if (props.right) styles.right = props.right;
  if (props.top) styles.top = props.top;
  if (props.bottom) styles.bottom = props.bottom;

  return styles;
});
</script>

<style scoped>
.star-wrapper {
  pointer-events: none;
}
</style>
