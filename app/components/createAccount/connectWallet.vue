<template>
  <div>
    <h3 class="text-2xl font-semibold text-text-black">Connect your wallet</h3>
    <p class="text-xs text-subtext">Connect more than one wallet at the same time to acess all we have to offer. We do not store or control your private keys</p>
    <div class="mt-4.5 overflow-y-auto" style="max-height: calc(100vh - 500px);">
      <div v-for="option in computedWalletOptions" :key="option.name" class="flex py-3 items-center justify-between">
        <div class="flex items-center gap-1">
          <img :src="option.icon" :alt="option.name" class="w-6 h-6" />
          <span class="text-sm font-medium text-text-black">{{ option.name }}</span>
        </div>
        <button @click="handleConnect(option)" class="btn-outlined">
          Connect
        </button>
      </div>
    </div>
    <div v-if="walletOptions.length > 5" class="flex justify-center">
      <button class="btn-outlined w-[120px] mt-8">{{ showAll ? 'See less' : 'See more' }}</button>
    </div>
    <LazyBottomSlider :modal="modal"  v-model="showConnectingMore" />
    <LazyBottomSlider :modal="connectedModal"  v-model="showConnectedModal" />
  </div>
</template>

<script setup lang="ts">
import { walletOptions } from '~/utils/constants/appData';
import type { Modal } from '~/utils/types/types';

const emit = defineEmits(['update:step']);

const router = useRouter();
const showAll = ref(false);
const showConnectingMore = ref(false);
const showConnectedModal = ref(false);

const computedWalletOptions = computed(() => {
  return showAll.value ? walletOptions : walletOptions.slice(0, 5);
})
const modal:Modal = {
  title: 'Connecting Phantom Wallet',
  subtitle: 'Hold o , we are connecting and verifying your wallet',
  icon: 'gear-loader',
  primaryActionTitle: 'Connecting Wallet',
  primaryAction: () => {
    log.info('connecting wallet');
  }
}
const connectedModal:Modal = {
  title: 'Wallet Connected',
  primaryActionTitle: 'Done',
  secondaryActionTitle: 'Connect More Wallet',
  primaryAction: () => {
    router.push('/enableNotifications')
  },
  secondaryAction: () => {
    router.push('/enableNotifications')
  },
  icon: 'pencil-checkmark'
}
const handleConnect = (option: any) => {
  showConnectingMore.value = true;
  setTimeout(() => {
    showConnectingMore.value = false;
    showConnectedModal.value = true;
  }, 1500);
}
</script>

<style scoped>

</style>