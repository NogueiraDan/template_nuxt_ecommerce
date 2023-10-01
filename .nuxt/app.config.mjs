
import { updateAppConfig } from '#app'
import { defuFn } from 'E:/Daniel Nogueira/Documents/Programação/Práticas/VueJS/nuxt_products/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {}
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)