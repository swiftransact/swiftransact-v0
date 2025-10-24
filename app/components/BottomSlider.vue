<template>
  <Transition name="slide-up">
    <div @click="emit('update:modelValue', false)" v-if="modelValue" class="overlay h-screen">
      <div @click.stop class="slider-content bg-background">
          <div @click="emit('update:modelValue', false)" class="w-22 h-1 mb-6 bg-background-input rounded-4xl mx-auto mt-5"></div>
          <!-- header -->
           <template v-if="title">
               <div class="px-5 pb-3 flex items-center">
                  <p class="font-semibold flex-1 text-center text-lg text-tertiary-text">{{ title }}</p>
                  <Icon name="close" :size="20" @click="emit('update:modelValue', false)" />
              </div>
              <divider />
           </template>
           <template v-else-if="modal">
            <div class="flex flex-col items-center px-5 py-5">
                <icon :name="modal.icon" :size="90" :color="modal.iconColor || 'var(--color-primary)'" />
                <div class="w-full mb-10 mt-6">
                    <p class="text-text1 text-lg text-center font-semibold leading-5.5">{{ modal.title }}</p>
                    <p v-if="modal.subtitle" class="text-text1 text-center text-sm">{{ modal.subtitle }}</p>
                </div>
                <div class="flex gap-2 w-full">
                    <app-button class="flex-1" v-if="modal.secondaryActionTitle" :title="modal.secondaryActionTitle" variant="info" :onClick="modal.secondaryAction" />
                    <app-button class="flex-1" :title="modal.primaryActionTitle" variant="primary" :onClick="modal.primaryAction" />
                </div>
            </div>
           </template>
           <div>
              <slot />
           </div>
           <safe-area position="bottom" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useScrollLock } from '@vueuse/core';
import type { IconName } from '~/utils/types/icons';

type Modal = {
    title: string;
    subtitle?: string;
    icon: IconName;
    primaryActionTitle: string;
    primaryAction: () => void;
    secondaryActionTitle?: string;
    secondaryAction?: () => void;
    iconColor?: string;
}

type BaseProps = {
    modelValue: boolean;
}

// Discriminated union: either title (with slot) OR modal, but not both
type SliderProps = BaseProps & (
    | { title: string; modal?: never }
    | { modal: Modal; title?: never }
)

const emit = defineEmits(['update:modelValue'])
const props = defineProps<SliderProps>()

const slots = useSlots()
if (import.meta.dev && props.title && !slots.default) {
    console.warn('BottomSlider: title prop requires slot content to be provided')
}

// Lock scroll when modal is open
const isLocked = useScrollLock(document?.body)
watch(() => props.modelValue, (value) => {
    isLocked.value = value
}, { immediate: true })
</script>

<style scoped>
.overlay{
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 430px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}
.slider-content{
    border-radius: 25px 25px 0 0;
    max-height: 90vh;
    /* min-height: 50vh; */
    position: absolute;
    bottom: 0;
    width: 100%;
}

/* Transition animations */
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.3s ease-out;
}

.slide-up-enter-active .slider-content,
.slide-up-leave-active .slider-content {
    transition: transform 0.3s ease-out;
}

/* Overlay fade */
.slide-up-enter-from,
.slide-up-leave-to {
    opacity: 0;
}

/* Slider slide up/down */
.slide-up-enter-from .slider-content,
.slide-up-leave-to .slider-content {
    transform: translateY(100%);
}

@media (max-width: 767px) {
    .overlay {
        max-width: 100%;
    }
}
</style>