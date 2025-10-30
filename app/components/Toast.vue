<template>
  <div class="alert-panel-container">
    <transition-group tag="ul" name="alert" id="alert-sequence">
      <div
        v-for="(notification, index) in toasts"
        :key="notification.id"
        :class="{
          child1: index === 0,
          child2: index === 1,
          child3: index === 2,
        }"
       class="flex px-2 py-3 rounded-md items-center gap-2" :style="{backgroundColor: getToastColor(notification.type)}">
      <icon color="white" :size="16" :name="getToastIcon(notification.type)" />
      <p class="text-white max-w-[70vw] flex-1 line-clamp-3">{{ notification.notification }}</p>
      <icon @click="removeToast(notification.id)" name='x' color="white" :size="16" />
    </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import type { IconName } from '~/utils/types/icons';
import { useAppStore } from '~/store/app';

const appInstance = useAppStore()
const { toasts } = storeToRefs(appInstance)
const { removeToast } = appInstance

const toastMap = {
    error: {
        color: '#B3261E',
        icon: 'close' as IconName
    },
    warning: {
        color: '#f69320',
        icon: 'warning' as IconName
    },
    info: {
        color: '#0878b8',
        icon: '' as IconName
    },
    success: {
        color: '#29941B',
        icon: 'check-mark' as IconName
    }
}
const getToastColor = (type: 'success' | 'error' | 'warning' | 'info') => {
  return toastMap[type].color
}
const getToastIcon = (type: 'success' | 'error' | 'warning' | 'info') => {
  return toastMap[type].icon
}
</script>

<style scoped>
.alert-panel-container {
  position: fixed;
  z-index: 1000;
  height: auto;
  left: 50%;
  top: 3rem;
  width: 28em;
  transform: translate(-50%);
}

#alert-sequence {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.child1 {
  transform: scale(1) translateY(0);
  transform-origin: center;
  opacity: 1;
  z-index: 3;
}

.child2 {
  transform: scale(0.85) translateY(-25%);
  transform-origin: center;
  opacity: 0.9;
  z-index: 2;
}

.child3 {
  transform: scale(0.75) translateY(-75%);
  transform-origin: center;
  opacity: 0.9;
  z-index: 0;
}

.child4 {
  transform: scale(0.65) translateY(-150%);
  transform-origin: center;
  opacity: 0.9;
  z-index: 0;
}

.child5 {
  transform: scale(0.55) translateY(-275%);
  transform-origin: center;
  opacity: 0.9;
  z-index: 0;
}

.alert-enter-active {
  transition: all 400ms ease-out;
}

.alert-leave-active {
  position: absolute;
  bottom: 0;
  z-index: -100;
  transition: all 300ms ease-out;
}

.alert-move {
  transition: all 400ms ease-out;
}

.alert-enter-from {
  opacity: 0;
  transform: translateY(-80%);
}

.alert-leave-to {
  opacity: 0;
  transform: translateX(-45%) scale(0.5);
}
</style>