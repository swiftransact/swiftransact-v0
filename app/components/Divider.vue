<template>
    <div class="seperator" :style="{ backgroundColor: color, height: height }"></div>
  </template>
  
  <script lang="ts" setup>
  defineProps({
    color: {
      type: String,
      default: 'var(--color-background-input)',
    },
    height: {
      type: String,
      default: '1px',
    },
  })
  </script>
  
  <style scoped>
  .seperator {
    width: 100%;
  }
  </style>
  