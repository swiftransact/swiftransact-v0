import type { IconName } from "../types/icons"

export const NETWORK_PROVIDERS = ['mtn', 'glo', 'airtel', '9mobile']
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
        name: 'Transfer',
        icon: 'swap-fill',
        value: 'transfer'
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
  export const appServices: {name: string, color: string, icon: IconName, to: string}[] = [
    {
      name: 'Transfer',
      icon: 'swap-fill',
      color: '#0500FF',
      to: '/transfer',
    },
    {
      name: 'Recharge & data',
      icon: 'phone',
      color: '#4FA088',
      to: '/services/recharge',
    },
    {
      name: 'Tickets',
      icon: 'ticket',
      color: '#34A853',
      to: '/services/tickets',
    },
    {
      name: 'Flight',
      icon: 'flight',
      color: '#E0CC7F',
      to: '/services/flight',
    },
    {
      name: 'Electricity',
      icon: 'bulb',
      color: '#FBBC05',
      to: '/services/electricity',
    },
    {
      name: 'Bills',
      icon: 'phone-bill',
      color: '#2461ED',
      to: '/bills',
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
  export const rechargeNetworks = [
    {
      name: 'MTN',
      icon: '/images/mtn.png',
      airtimeTo: '/services/rechargeairtime/mtn',
      dataTo: '/services/rechargedata/mtn'
    },
    {
      name: 'GLO',
      icon: '/images/glo.png',
      airtimeTo: '/services/rechargeairtime/glo',
      dataTo: '/services/rechargedata/glo'
    },
    {
      name: 'AIRTEL',
      icon: '/images/airtel.png',
      airtimeTo: '/services/rechargeairtime/airtel',
      dataTo: '/services/rechargedata/airtel'
    },
    {
      name: '9MOBILE',
      icon: '/images/9mobile.jpeg',
      airtimeTo: '/services/rechargeairtime/9mobile',
      dataTo: '/services/rechargedata/9mobile'
    }
  ]
  export const nigerianElectricityProviders = [
    {
      name: 'Abuja Electricity Distribution Company (AEDC)',
      img: '/images/electricity/AEDC.jpg',
      value: 'AEDC'
    },
    {
      name: 'Aba Power Limited Electric (APLE)',
      img: '/images/electricity/APLE.png',
      value: 'APLE'
    },
    {
      name: 'Benin Electricity Distribution Company (BEDC)',
      img: '/images/electricity/BEDC.jpeg',
      value: 'BEDC'
    },
    {
      name: 'Eko Electricity Distribution Company (EKEDC)',
      img: '/images/electricity/EKEDC.png',
      value: 'EKEDC'
    },
    {
      name: 'Enugu Electricity Distribution Company (EEDC)',
      img: '/images/electricity/EEDC.jpeg',
      value: 'EEDC'
    },
    {
      name: 'Ibadan Electricity Distribution Company (IBEDC)',
      img: '/images/electricity/IBEDC.jpeg',
      value: 'IBEDC'
    },
    {
      name: 'Ikeja Electric (IE)',
      img: '/images/electricity/IE.jpeg',
      value: 'IE'
    },
    {
      name: 'Jos Electricity Distribution Company (JEDC)',
      img: '/images/electricity/JEDC.jpeg',
      value: 'JEDC'
    },
    {
      name: 'Kaduna Electric (KAEDCO)',
      img: '/images/electricity/KAEDCO.',
      value: 'KAEDCO'
    },
    {
      name: 'Kano Electricity Distribution Company (KEDCO)',
      img: '/images/electricity/KEDCO.png',
      value: 'KEDCO'
    },
    {
      name: 'Port Harcourt Electricity Distribution Company (PHEDC)',
      img: '/images/electricity/PHEDC.jpeg',
      value: 'PHEDC'
    },
    {
      name: 'Yola Electricity Distribution Company (YEDC)',
      img: '/images/electricity/YEDC.jpeg',
      value: 'YEDC'
    }
  ]