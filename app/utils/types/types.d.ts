import type { IconName } from "./icons";

export type Modal = {
    title?: string;
    subtitle?: string;
    icon: IconName;
    primaryActionTitle: string;
    primaryAction: () => void;
    secondaryActionTitle?: string;
    secondaryAction?: () => void;
    iconColor?: string;
    primaryActionIcon?: IconName;
    secondaryActionIcon?: IconName;
    type?: 'success' | 'error' | 'warning' | 'info';
}
export type Bank = {
    id: number
    name: string
    slug: string
    code: string
    longcode: string
    gateway: string
    pay_with_bank: boolean
    supports_transfer: boolean
    available_for_direct_debit: boolean
    active: boolean
    country: string
    currency: string
    type: string
    is_deleted: boolean
    createdAt: string
    updatedAt: string
}
export type Toast = {
    notification: string
    type: 'success' | 'error' | 'warning' | 'info'
    id: string
}
export type ReceiptType = 'transfer' | 'electricity' | 'data' | 'airtime'