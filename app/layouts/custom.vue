<template>
    <div class="flex-col home overflow-y-auto flex  w-full pb-50">
        <top-nav />
        <div class="flex-1 px-[20px] bg-background">
            <NuxtPage />
        </div>
        <bottom-nav />
    </div>
</template>

<script setup lang="ts">

</script>
<style scoped>
.home{
    background-color: var(--color-background);
    max-width: 430px;
    margin: 0 auto;
    display: flex;
    padding-top: calc(var(--top) + 55px);
    overscroll-behavior: none;
    touch-action: pan-x pan-y;
}
</style>