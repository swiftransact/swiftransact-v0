import type { IconName } from "./icons";

export type Modal = {
    title: string;
    subtitle?: string;
    icon: IconName;
    primaryActionTitle: string;
    primaryAction: () => void;
    secondaryActionTitle?: string;
    secondaryAction?: () => void;
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