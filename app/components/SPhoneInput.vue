<template>
  <div class="flex gap-2 relative">
    <div class="flag-container">
        <span>{{ getFlagEmoji(selectedCountry) }}</span>
        <icon @click="showSelectFlag = !showSelectFlag" :size="16" :name="showSelectFlag ? 'arrow_head_up' : 'arrow_head_down'" color="var(--color-black)" />
    </div>
    <input 
        :class="{ 'error': !isValid }" 
        type="text" :modelValue="modelValue" 
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        placeholder="Enter your phone number" 
    />
    <Transition name="slide-fade">
        <div v-if="showSelectFlag" class="absolute select-flag">
            <input 
                v-model="searchQuery" 
                type="text" 
                class="search-input" 
                placeholder="Search country..." 
                @click.stop
            />
            <div class="max-h-[150px] rounded-md overflow-y-auto">
                <div 
                    @click="selectedCountry = option.code; showSelectFlag = false; searchQuery = '';" 
                    :class="{ 'active': selectedCountry === option.code }" 
                    class="py-2 px-2.5 flex items-center gap-2 country-item" 
                    v-for="option in filteredCountries" 
                    :key="option.code"
                >
                    <span>{{ getFlagEmoji(option.code) }}</span>
                    <span class="text-xs">({{ option.callingCode }})</span>
                    <span class="text-xs">{{ option.name || option.code }}</span>
                </div>
                <div v-if="filteredCountries.length === 0" class="py-3 px-2.5 text-xs text-subtext">
                    No countries found
                </div>
            </div>
        </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { CountryCode } from 'libphonenumber-js';
import { getCountries, getCountryCallingCode, isValidPhoneNumber } from 'libphonenumber-js'
import { getName } from 'country-list'

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits(['update:modelValue', 'update:isValid']);
const showSelectFlag = ref(false);
const selectedCountry = ref<CountryCode>('NG')
const searchQuery = ref('');

const countryOptions = getCountries().map(code => ({
  code,
  name: getName(code),
  callingCode: `+${getCountryCallingCode(code)}`,
  flag: getFlagEmoji(code)
}))

const filteredCountries = computed(() => {
  if (!searchQuery.value) return countryOptions;
  
  const query = searchQuery.value.toLowerCase();
  return countryOptions.filter(option => 
    option.name?.toLowerCase().includes(query) ||
    option.code.toLowerCase().includes(query) ||
    option.callingCode.includes(query)
  );
})

const isValid = computed(() => {
  if (!props.modelValue || props.modelValue.length === 0) return true;
  const valid = isValidPhoneNumber(props.modelValue, selectedCountry.value)
  emit('update:isValid', valid);
  return valid;
})

</script>

<style scoped>
.select-flag, input, .flag-container {
    background-color:  #F6F6F6;
    border: 1px solid  #F6F6F6 !important;
    border-radius: 8px;
    color: #000;
}
.active{
    background-color: #FFCBA4;
}
.flag-container {
    width: 75px;
    height: 48px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 16px;
}
.flag-container.dark, input.dark, .select-flag.dark{
    background-color: #333 !important;
    border-color: rgba(255, 255, 255, 0.22) !important;
    color: #FFF;
}
.flag-container.success{
    border-color: #29941B !important;
}
.flag-container.error, input.error{
    border-color: var(--color-error) !important;
    color: var(--color-error);
    &::placeholder{
        color: var(--color-error);
    }
}
input{
    flex: 1;
    padding: 10px;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 22px;
}
.select-flag{
    top: 110%;
    width: 100%;
    padding: 8px;
}
.search-input {
    width: 100%;
    padding: 8px;
    font-size: 12px;
}
.country-item {
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.15s ease;
}
.country-item:hover {
    background-color: rgba(255, 203, 164, 0.5);
}

/* Transition styles */
.slide-fade-enter-active {
    transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.15s ease-in;
}

.slide-fade-enter-from {
    transform: translateY(-10px);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateY(-5px);
    opacity: 0;
}
</style>