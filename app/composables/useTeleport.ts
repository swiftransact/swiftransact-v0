/**
 * Custom hook to check if a teleport target is ready
 * @param targetId - The id of the teleport target
 * @returns An object containing the isReady state
 */
export default (targetId: string): { isReady: Ref<boolean> } => {
    const isReady = ref(false)
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const checkElement = () => {
        if (isReady.value) return

        const target = document.querySelector(targetId)
        if (target) isReady.value = true
        else timeoutId = setTimeout(checkElement, 10)
    }

    onMounted(async () => {
        await nextTick()
        checkElement()
    })

    onUnmounted(() => {
        if (timeoutId) {
            clearTimeout(timeoutId)
            timeoutId = null
        }
    })

    return {
        isReady
    }
}