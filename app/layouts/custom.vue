<template>
    <div class="flex-col home overflow-y-auto flex  w-full pb-50">
        <top-nav v-bind="topNavProps">
            <template v-if="topNavProps.right" #right>
                <!-- teleport target -->
                 <div id="top-nav-right" />
            </template>
        </top-nav>
        <div class="flex-1 px-5 bg-background">
            <keep-alive>
                <NuxtPage />
            </keep-alive>
        </div>
        <bottom-nav />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const topNavProps = computed(() => ({ 
    title: route.meta.title as string | undefined, 
    right: route.meta.right as boolean | undefined,
    showWallet: route.meta.showWallet as boolean | undefined,
    showDefaultActions: route.meta.showDefaultActions as boolean | undefined
}))
</script>
<style scoped>
.home{
    background-color: var(--color-background);
    max-width: 430px;
    margin: 0 auto;
    display: flex;
    padding-top: 80px;
    overscroll-behavior: none;
    touch-action: pan-y;
}
</style>