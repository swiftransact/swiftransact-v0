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