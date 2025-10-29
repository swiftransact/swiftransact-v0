<template>
  <div>
    <div @click="showSelectModal = !showSelectModal" class="flex items-center gap-1 bg-background-input py-2 px-4 rounded-lg">
        <img src="/images/coins/usdc.png" class="object-contain w-5 h-5" />
        <span class="text-text-black text-base font-medium">{{ modelValue || 'Select Coin' }}</span>
        <icon :name="showSelectModal ? 'arrow_head_up' : 'arrow_head_down'" :size="16" color="var(--color-black)" />
    </div>
    <LazyBottomSlider v-model="showSelectModal" title="Select Coin">
        <div class="px-6 py-2  max-h-[350px] overflow-y-auto">
            <div @click="emit('update:modelValue', 'USDC'); showSelectModal = false;" class="flex py-3 items-center gap-2" v-for="option in 7" :key="option">
                <img src="/images/coins/usdc.png" class="w-[34px] h-[34px] object-contain" />
                <div>
                    <span class="text-base block font-medium text-text-black">USDC Coin</span>
                    <span class="text-xs block text-subtext">USDT</span>
                </div>
            </div>
        </div>
    </LazyBottomSlider>
  </div>
</template>

<script setup lang="ts">

const showSelectModal = ref(false)

const emit = defineEmits<{
    'update:modelValue': [value: string]
}>()
const props = defineProps<{
    modelValue: string
}>()
</script>

<style  scoped>

</style>