<template>
  <splash v-if="showSplash" />
  <div v-else class="h-full flex flex-col py-5 px-6 gap-3 transition ease-linear duration-300">
      <button @click="handleAction('create')" class="font-medium text-sm text-text-black self-end shrink-0">Skip</button>
       <div class="flex-1 flex flex-col gap-6 min-h-0">
           <carousel class="flex-1 min-h-0" v-model="currentSlide" v-bind="config">
               <slide v-for="item in slides" :key="item.title">
                 <div class="h-full flex flex-col">
                     <div class="flex-1 flex items-center justify-center min-h-0">
                         <img :src="item.image" alt="image" class="w-[60%] max-h-full object-contain">
                     </div>
                     <div class="text-center mt-3 shrink-0">
                         <h3 class="text-xl mb-2 font-semibold text-text-black">{{ item.title }}</h3>
                         <p class="text-text1 text-base">{{ item.subtitle }}</p>
                     </div>
                 </div>
               </slide>
           </carousel>
           <div class="px-1.5 py-0.5 flex items-center gap-1 mx-auto rounded-4xl bg-grey-bg w-fit shrink-0">
             <div v-for="i in 3" :key="i" :class="i - 1 === currentSlide ? 'active' : 'inactive'"></div>
           </div>
           <div class="flex gap-2 shrink-0">
             <app-button title="Log in" variant='tertiary' @click="handleAction('login')" />
             <app-button title="Create Account" variant="primary" @click="handleAction('create')" />
           </div>
           <Agreement />
       </div>
  </div>
  </template>
  
  <script setup lang="ts">
  import { Carousel, Slide } from 'vue3-carousel'

  const currentSlide = ref(0)
  const showSplash = ref(true)
  const router = useRouter();
  const config = {
    autoplay: 4000,
  }
  const slides = [
    {
        image: '/images/image2.png',
        title: 'Crypto - Fiat Conversion',
        subtitle: 'Easily convert major cryptocurrencies into Naira or Dollars with just a few clicks.'
    },{
        image: '/images/image2.png',
        title: 'One App, Multiple Wallets',
        subtitle: 'Integrate 5+ Crypto wallets, we offer support for multiple cryptocurrencies.'
    },{
        image: '/images/image3.png',
        title: 'Payment Gateway',
        subtitle: 'Pay Utility Bills, Top-Up Your Mobile, send and receive cryptocurrency payments.'
    }
  ]
  onMounted(() => {
    setTimeout(() => {
      showSplash.value = false
    }, 4000)
  })
  const handleAction = (action: 'login' | 'create') => {
    if(action === 'login'){
    //   goTo('/auth/login')
    }else{
      goTo('/auth/setup')
    }
  }
  </script>
  <style scoped>
  .active{
    background-color: var(--color-secondary-button);
    width: 21px;
    height: 6px;
    border-radius: 64px;
  }
  .inactive{
    background-color: #CECECE;
    width: 9px;
    height: 6px;
    border-radius: 64px;
  }
  </style>
  