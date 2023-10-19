// https://nuxt.com/docs/api/configuration/nuxt-config
// from: https://github.com/GrantErickson/StaticSpa396/blob/master/nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@invictus.codes/nuxt-vuetify"],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,
      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
      useVuetifyLabs: false,
    },
  },
});
