<template>
  <div 
    class="settings-item" 
    :class="{ 'clickable': isClickable, 'danger': isDanger }"
    @click="handleClick"
  >
    <div class="flex items-center gap-3 flex-1">
      <IconBox 
        v-if="icon"
        :name="icon" 
        :color="iconColor"
        :size="16" 
        tint-size="31px" 
        :tint-color="isDark ? '#333' : '#F0EFE7'"
      />
      <span class="text-text-black text-base font-medium" :class="{ 'text-error': isDanger }">
        {{ label }}
      </span>
      <span v-if="badge" class="badge">{{ badge }}</span>
    </div>
    
    <div class="flex items-center gap-2">
      <span v-if="value" class="text-subtext text-sm">{{ value }}</span>
      <slot />
      <Icon 
        v-if="isClickable && !$slots.default" 
        name='play-arrow-right' 
        :size="16" 
        color="var(--color-subtext)" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
import type { IconName } from '~/utils/types/icons'

const isDark = useDark()

const props = withDefaults(defineProps<{
  icon?: IconName
  iconColor?: string
  label: string
  value?: string
  badge?: string
  isDanger?: boolean
}>(), {
  iconColor: 'var(--color-black)',
  isDanger: false
})

const emit = defineEmits(['click'])

const isClickable = computed(() => {
  return !!emit
})

const handleClick = () => {
  emit('click')
}
</script>

<style scoped>
.settings-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  transition: background-color 0.2s ease;
}

.settings-item.clickable {
  cursor: pointer;
}

.settings-item.clickable:hover {
  background-color: var(--color-background1);
}

.settings-item.clickable:active {
  background-color: var(--color-background2);
}

.badge {
  background-color: var(--color-primary);
  color: white;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: auto;
}

.settings-item.danger .text-error {
  color: var(--color-error);
}
</style>

