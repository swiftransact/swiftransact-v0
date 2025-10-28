<template>
    <div class="flex-col home overflow-y-auto flex  w-full pb-50">
        <top-nav :title="topNavProps.title">
            <template #right>
                <!-- teleport target -->
                 <div id="top-nav-right" />
            </template>
        </top-nav>
        <div class="flex-1 px-[20px] bg-background">
            <NuxtPage />
        </div>
        <bottom-nav />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const topNavProps = computed(() => ({ title: route.meta.title as string | undefined }))
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