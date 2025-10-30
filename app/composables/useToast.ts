import { useAppStore } from "~/store/app"

export default (type: 'success' | 'error' | 'warning' | 'info', notification: string) => {
    const appInstance = useAppStore()
    const { toasts } = storeToRefs(appInstance)
    const { removeToast } = appInstance
    if(toasts.value.some(toast => toast.notification === notification)) return;
    const newToast = {
        type,
        notification,
        id: uuid(10),
    }
    if(toasts.value.length < 3){
        toasts.value.unshift(newToast)
    }else{
        toasts.value.pop()
        toasts.value.unshift(newToast)
    }

    // schedule removal of toast after 3 seconds
    setTimeout(() => {
        removeToast(newToast.id)
    }, 15000)
}

