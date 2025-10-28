import type { IconName } from "../types/icons"

export const walletOptions = [
    {
        name: 'MetaMask',
        icon: '/images/coins/metamask.png'
    },
    {
        name: 'Backpack',
        icon: '/images/coins/backpack.png'
    },
    {
        name: 'Phantom',
        icon: '/images/coins/phantom.png'
    },
    {
        name: 'Trust Wallet',
        icon: '/images/coins/trust.png'
    },
    {
        name: 'Zerion',
        icon: '/images/coins/zerion.png'
    },
    
]
export const navItems: { name: string, icon: IconName, value: string }[] = [
    {
        name: 'Home',
        icon: 'home-bold',
        value: '/home'
    },
    {
        name: 'Convert',
        icon: 'swap-fill',
        value: '/convert'
    },
    {
        name: 'Bills',
        icon: 'phone-bill',
        value: '/bills'
    },
    {
        name: 'Profile',
        icon: 'profile',
        value: '/profile'
    }
  ]