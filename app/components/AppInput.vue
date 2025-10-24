<template>
<div>
    <div class="input-wrapper" :class="orientation">
      <label v-if="label" class="text-text text-base font-medium">{{ label }}</Label>
      <div class="input-container">
          <icon v-if="prependIcon" :name="prependIcon" :size="18" :color="isDark ? '#FFF' : '#616161'" />
          <input
              class="flex-1"
              :type="type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type"
              :placeholder="placeholder"
              :value="modelValue"
              :disabled="!editable"
              @input="onInput"
          />
          <icon 
              v-if="appendIconName"
              @click.stop="togglePasswordVisibility"  
              :name="appendIconName" 
              :size="20" 
              :color="isDark ? '#FFF' : '#616161'"
          />
      </div>
    </div>
    <p v-if="error" class="text-error text-xs mt-1">{{ error }}</p>
</div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core';
import type { IconName } from '~/utils/types/icons';

const isDark = useDark();
const emit = defineEmits(['update:modelValue']);
const props = withDefaults(defineProps<{
    label?: string
    placeholder?: string
    modelValue: string | number
    type?: string
    editable?: boolean
    prependIcon?: IconName
    appendIcon?: IconName
    orientation?: 'vertical' | 'horizontal'
    error?: string
}>(), {
    placeholder: 'Type here',
    type: 'text',
    editable: true,
    orientation: 'vertical'
})
const isPasswordVisible = ref(false);
const appendIconName: ComputedRef<IconName | undefined> = computed(() => {
    if(props.type === 'password'){
        return isPasswordVisible.value ? 'eye-on' : 'eye-off';
    }
    return props.appendIcon;
})
const togglePasswordVisibility = () => {
    if (props.type === 'password') isPasswordVisible.value = !isPasswordVisible.value
}
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  let value = target.value
  
  if (props.type === 'number' && value !== '') {
    const numValue = Number(value)
    emit('update:modelValue', isNaN(numValue) ? value : numValue)
  } else {
    emit('update:modelValue', value)
  }
}
</script>

<style scoped>
.input-container{
    background-color: var(--color-background-input);
    display: flex;
    align-items: center;
    border-radius: 10px;
    color: var(--color-text1);
    padding: 16px;
    gap: 10px;
}
input{
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 22px;
}
input::placeholder{
    color: var(--color-input-text);
}
.input-wrapper{
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
}
.input-wrapper.horizontal{
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 100%;

}
.input-wrapper * {
    flex: 1;
}
</style>