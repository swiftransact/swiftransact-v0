<template>
    <div :class="orientation">
        <div class="flex items-center justify-center gap-2">
           <span class="text-text-black text-3xl font-bold">&#8358;</span>
           <input
               :modelValue="modelValue"
               @input="handleInput"
               inputmode="numeric"
               :placeholder="placeholder"
               class="text-[20px] text-center"
               maxlength="10"
               pattern="[0-9]*"
           />
        </div>
        <app-button class="btn" @click="onClick" :disabled="disabled" :title="buttonTitle" />
    </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<{
  modelValue: string | number
  placeholder?: string
  orientation?: 'vertical' | 'horizontal'
  disabled?: boolean
  buttonTitle: string
  onClick?: () => void
}>(), {
  modelValue: 0,
  placeholder: 'Enter Amount',
  orientation: 'vertical',
  disabled: false,
})

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  const numericValue = input.value.replace(/[^0-9]/g, '')
  input.value = numericValue
  emit('update:modelValue', numericValue)
}
</script>

<style  scoped>
.horizontal{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.vertical{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 32px;
}
.horizontal .btn{
    max-height: 35px;
}
input{
    color: var(--color-text-black);
    &::placeholder{
        color: var(--color-text-black);
        opacity: 0.66;
    }
  }
</style>