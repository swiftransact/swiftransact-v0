<template>
    <div class="h-full w-full px-6 py-5 flex flex-col">
        <back-button class="my-[20%]" icon-name="back" text-style="text-xs text-text-black" />
        <div class="flex-1">
            <span class="text-subtext text-[10px] font-medium block mb-2">Step {{ step }}/5</span>
            <component 
              :is="renderComponent()"
              @update:step="step = $event" 
              :key="step"
            />
        </div>
        <agreement :encrypted="step === 5"  class="mt-auto" />
    </div>
</template>

<script setup lang="ts">
import email from '~/components/createAccount/email.vue';
import createPassword from '~/components/createAccount/createPassword.vue';
import PhoneNumber from '~/components/createAccount/PhoneNumber.vue';
import verifyOtp from '~/components/createAccount/verifyOtp.vue';
import connectWallet from '~/components/createAccount/connectWallet.vue';

const step = ref(1);

const renderComponent = () => {
    switch(step.value) {
        case 1:
            return email;
        case 2:
            return createPassword;
        case 3:
            return PhoneNumber;
        case 4:
            return verifyOtp;
        case 5:
            return connectWallet;
    }
}
</script>

<style scoped>

</style>