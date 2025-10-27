import type { IconName } from "../types/icons"

export const walletOptions = [
    {
        name: 'MetaMask',
        icon: '/images/coins/metamask.jpg'
    },
    {
        name: 'Backpack',
        icon: '/images/coins/backpack.jpg'
    },
    {
        name: 'Phantom',
        icon: '/images/coins/phantom.jpg'
    },
    {
        name: 'Trust Wallet',
        icon: '/images/coins/trust.jpg'
    },
    {
        name: 'Zerion',
        icon: '/images/coins/zerion.jpg'
    },
    
]
export const navItems: { name: string, icon: IconName, value: string }[] = [
    {
        name: 'Home',
        icon: 'home-bold',
        value: 'home'
    },
    {
        name: 'Convert',
        icon: 'swap-fill',
        value: 'convert'
    },
    {
        name: 'Bills',
        icon: 'phone-bill',
        value: 'bills'
    },
    {
        name: 'Profile',
        icon: 'profile',
        value: 'profile'
    }
  ]