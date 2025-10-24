// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@vite-pwa/nuxt'],
  app: {
    head: {
      title: 'Swiftransact',
      meta: [
        { name: 'description', content: 'Swiftransact' },
        {
					name: "viewport",
					content: "width=device-width, initial-scale=1.0, viewport-fit=cover, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
				},
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  ssr: false,
  components: true,
  typescript: {
    typeCheck: true,
  },
  vite: {
    plugins: [tailwindcss()]
  },
  css: ['~/assets/css/main.css', '~/assets/css/colors.css', '~/assets/css/fonts.css'],
  runtimeConfig: {
    public: {
      
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Swiftransact',
      short_name: 'Swiftransact',
      description: 'Swiftransact',
    }
  }
})