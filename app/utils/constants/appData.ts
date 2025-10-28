import type { IconName } from "../types/icons"

export const walletOptions = [
    {
        name: 'MetaMask',
        icon: '/images/coins/metamask.png',
        bg: 'orange'
    },
    {
        name: 'Backpack',
        icon: '/images/coins/backpack.png',
        bg: '#EF9697E0'
    },
    {
        name: 'Phantom',
        icon: '/images/coins/phantom.png',
        bg: '#E0DCFB'
    },
    {
        name: 'Trust Wallet',
        icon: '/images/coins/trust.png',
        bg:' #AFFCD0'
    },
    {
        name: 'Zerion',
        icon: '/images/coins/zerion.png',
        bg: '#8EAEF5'
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
  export const appServices: {name: string, color: string, icon: IconName, action: () => void}[] = [
    {
      name: 'Transfer',
      icon: 'swap-fill',
      color: '#0500FF',
      action: () => {
        log.info('action')
      },
    },
    {
      name: 'Recharge & data',
      icon: 'phone',
      color: '#4FA088',
      action: () => {
        log.info('action')
      },
    },
    {
      name: 'Tickets',
      icon: 'ticket',
      color: '#34A853',
      action: () => {
        log.info('action')
      },
    },
    {
      name: 'Flight',
      icon: 'flight',
      color: '#E0CC7F',
      action: () => {
        log.info('action')
      },
    },
    {
      name: 'Electricity',
      icon: 'bulb',
      color: '#FBBC05',
      action: () => {
        log.info('action')
      },
    },
    {
      name: 'Bills',
      icon: 'phone-bill',
      color: '#2461ED',
      action: () => {
        log.info('action')
      },
    }
  
  ]
  export const quickActions =[
    {
      label: 'Transfer',
      icon: 'send' as IconName,
      btnClass: 'btn-transparent'
    },
    {
      label: 'Receive',
      icon: 'arrow-down' as IconName,
      btnClass: 'btn-transparent'
    },
    {
      label: 'More',
      icon: 'kebab-menu' as IconName,
      btnClass: 'btn-outlined text-subtext text-base font-semibold rounded-[64px] py-2 px-4'
    }
  ]