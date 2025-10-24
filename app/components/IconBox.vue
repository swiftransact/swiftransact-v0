<template>
  <div class="icon-box">
    <icon :name="name" :size="size" :color="color" />
  </div>
</template>

<script setup lang="ts">
import type { IconName } from '~/utils/types/icons'

const props = withDefaults(defineProps<{
    name: IconName,
    size?: number,
    color?: string
    tintSize?: string
    tintColor?: string
}>(), {
    size: 20,
    tintColor: '#F0EFE7',
    tintSize: '50px'
})
</script>

<style scoped>
.icon-box{
    width: v-bind(tintSize);
    height: v-bind(tintSize);
    border-radius: 50%;
    background-color: v-bind(tintColor);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
</style>