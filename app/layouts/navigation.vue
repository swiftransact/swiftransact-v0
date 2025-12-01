<template>
  <div class="flex-col home max-h-screen flex pb-6 w-full">
    <app-nav v-bind="topNavProps">
      <template #right>
        <!-- teleport target -->
        <div id="app-nav-right" />
      </template>
    </app-nav>
    <div class="flex-1 touch-pan-y overflow-y-auto px-5 pb-50 bg-background">
      <keep-alive>
        <NuxtPage />
      </keep-alive>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const topNavProps = computed(() => ({
  title: route.meta.title as string | undefined,
  showSettings: route.meta.showSettings as boolean | undefined,
  showWallet: route.meta.showWallet as boolean | undefined,
}));
</script>
<style scoped>
.home {
  background-color: var(--color-background);
  max-width: 430px;
  margin: 0 auto;
  display: flex;
  padding-top: 60px;
  overscroll-behavior: none;
  touch-action: pan-y;
}
</style>
