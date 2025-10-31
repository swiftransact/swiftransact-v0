<template>
    <div class="relative">
        <star left="0px" top="10px" />
        <star left="0px" top="430px" />
        <success-animation />
        <p class="text-[20px] mt-5 mb-2 text-text-black text-center">{{ type === 'transfer' ? 'Transfer' : 'Recharge' }} Successful</p>
        <p class="text-base text-subtext text-center">Thank you for trusting swiftransact</p>
        <hr class="my-5 dashed" />
        <ReceiptDetail :copy-value="type === 'electricity' ? '1234567890' : undefined" :type="type" />
        <hr class=" mt-10 mb-4 dashed" />
        <div class="flex justify-center gap-4">
            <app-button variant="info" title="Share" prepend-icon="share" />
            <app-button @click="goTo('/transfer')" variant='primary' title="New Order" />
        </div>
        <div class="flex items-center justify-between mt-10">
            <p class="text-base text-text-black">Transfer Details</p>
            <icon @click="showAllDetails = !showAllDetails" :size="20" color="var(--color-black)" :name="showAllDetails ? 'arrow_head_up' : 'arrow_head_down'" />
        </div>
        <Transition name="slide-fade">
            <div v-if="showAllDetails">
                <div class="py-1.5" v-for="detail in details" :key="detail.name">
                    <p class="label">{{ detail.name }}</p>
                    <p class="value">{{ detail.value }}</p>
                </div>
                <hr class="my-4 dashed" />
            </div>
        </Transition>
        <div class="flex items-center justify-between mt-4">
            <p class="yexy-sm text-subtext">Total</p>
            <p class="text-sm text-text-black">150 USDC</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ReceiptType } from '~/utils/types/types';

definePageMeta({
  layout: 'navigation',
  title: 'Receipts',
  validate(route) {
      const validTypes: ReceiptType[] = ['transfer', 'electricity', 'data', 'airtime']
      return validTypes.includes(route.params.type as ReceiptType)
  },
})
const route = useRoute()
const type = route.params.type as ReceiptType
const details = [
    {
        name: 'Email address',
        value: 'swiftansact@gmail.com'
    },
    {
        name: 'Payment method',
        value: 'Solana Network'
    },
    {
        name: 'Bank Details',
        value: 'Paycom (OPAY)'
    },
    {
        name: 'Recipient info',
        value: 'Janeth Adacha zayna'
    },
    {
        name: 'Transaction ID',
        value: '....5742316'
    },
    {
        name: 'Fee',
        value: '0.1 USDC'
    },
    {
        name: 'Date',
        value: 'Saturday, 6 Sept 2025'
    }
]
const showAllDetails = ref(false)

const map = {
    transfer: {
        title: 'Transfer Successful',
    },
    electricity: {
        title: 'Recharge Successful',
    },
    data: {
        title: 'Data Purchase Successful',
    },
    airtime: {
        title: 'Airtime Purchase Successful',
    }
}
</script>
<style scoped>
.dashed{
    border-top: 1px dashed var(--color-subtext);
}
</style>
