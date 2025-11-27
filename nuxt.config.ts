// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: [
    "@vite-pwa/nuxt",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "vue3-carousel-nuxt",
    "vue3-carousel-nuxt",
  ],
  app: {
    head: {
      title: "Swiftransact",
      meta: [
        { name: "description", content: "Swiftransact" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, viewport-fit=cover, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  ssr: false,
  components: true,
  typescript: {
    typeCheck: true,
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@vueuse/core"],
    },
  },
  devServer: {
    host: "0.0.0.0",
  },
  css: [
    "~/assets/css/main.css",
    "~/assets/css/colors.css",
    "~/assets/css/fonts.css",
  ],
  runtimeConfig: {
    public: {
      paystackSecretKey: process.env.NUXT_ENV_PAYSTACK,
    },
  },
  pwa: {
    registerType: "autoUpdate",
    client: {
      installPrompt: true,
    },
    manifest: {
      name: "Swiftransact",
      short_name: "Swiftransact",
      description: "Swiftransact",
      orientation: "portrait",
      display: "standalone",
      theme_color: "#EA4E1B",
      background_color: "#FFFFFF",
    },
    pwaAssets: {
      image: "public/favicon.ico",
    },
  },
});
