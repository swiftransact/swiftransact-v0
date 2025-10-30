<template>
    <div class="rounded-sm p-3" :style="{ backgroundColor: color.bgColor }">
        <span class="text-sm" :style="{ color: color.textColor }">{{ text ?? color.text }}</span>
        <div class="flex items-center justify-between">
            <p class="text-2xl font-medium" :style="{ color: color.textColor }">850,000.00 NGN</p>
            <icon 
                v-if="copyValue" 
                name="copy" 
                @click="copy(copyValue)" 
                :size="20" :color="color.textColor" 
            />
        </div>
        <span 
            :class="`${color.btnColor} border mt-6 w-fit block rounded-lg px-2.5 py-1 text-xs`"
            :style="{ borderColor: color.borderColor }"
        >
            Janeth Adacha zayna
        </span>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type: 'transfer' | 'electricity' | 'data' | 'airtime'
  provider?: 'mtn' | 'glo' | 'airtel' | '9mobile'
  copyValue?: string
  text?: string
}>(), {
    provider: 'mtn'
})
const rechargeMap = {
    mtn: {
        text: 'MTN Nigeria',
        textColor: '#131313',
        bgColor: '#FFCB05',
        borderColor: '#FFCB0538',
        btnColor: 'bg-[#131313] text-[#FFCB05]'
    },
    glo: {
        text: 'Glo Nigeria',
        bgColor: '#7DC450',
        textColor: '#FFFFFF',
        borderColor: '#7DC45038',
        btnColor: 'bg-[#ffffff] text-[#7DC450]'
    },
    airtel: {
        text: 'Airtel Nigeria',
        bgColor: '#F11B25',
        textColor: '#FAEBFE',
        borderColor: '#F11B2538',
        btnColor: 'bg-[#ffffff] text-[#F11B25]'
    },
    '9mobile': {
        text: '9Mobile Nigeria',
        bgColor: '#bece27',
        textColor: '#FFFFFF',
        borderColor: '#bece2738',
        btnColor: 'bg-[#ffffff] text-[#bece27]'
    },
    transfer: {
        text: 'Amount',
        bgColor: '#FAEBFE',
        textColor: '#131313',
        borderColor: '#FAEBFE38',
        btnColor: 'bg-[#EA417C] text-white'
    },
    electricity: {
        text: 'Electricity',
        bgColor: '#FFCB05',
        textColor: '#131313',
        borderColor: '#FFCB0538',
        btnColor: 'bg-[#131313] text-[#FFCB05]'
    }

}
const color = computed(() => {
    if(props.type === 'transfer') return rechargeMap.transfer
    if(props.type === 'electricity') return rechargeMap.electricity
    if(props.type === 'data' || props.type === 'airtime') {
        return rechargeMap[props.provider as keyof typeof rechargeMap]
    }
    return rechargeMap.transfer
})
</script>
<style scoped>
</style>