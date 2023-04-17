// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        return tag === 'my-component'
      }
    }
  }
})
