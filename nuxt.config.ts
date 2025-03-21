// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  runtimeConfig:{
    public:{
      apiBase:"https://server.orchids.com.cn"
    }
  }
})