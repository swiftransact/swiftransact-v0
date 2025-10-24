<template>
    <div
      class="loader"
      :style="{
        width: size + 'px',
        height: size + 'px',
        borderTopColor: color,
        borderWidth: thickness + 'px',
        '--speed': speed,
      }"
    ></div>
  </template>
  
  <script lang="ts" setup>
  const props = defineProps({
    size: {
      type: Number,
      default: 20,
    },
    color: {
      type: String,
      default: '#fff',
    },
    thickness: {
      type: Number,
      default: 2,
    },
    speed: {
      type: String,
      default: '1s',
    },
  })
  </script>
  
  <style scoped>
  .loader {
    border-style: solid;
    border-radius: 50%;
    background-color: transparent;
    border-color: transparent;
    animation: spin var(--speed, 1s) linear infinite;
    margin: auto;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  