import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

import ArcoVue from '@arco-design/web-vue'
import AcroVueIcon from '@arco-design/web-vue/es/icon'

import '@arco-design/web-vue/dist/arco.css'
// import '@/assets/main.css'
import '@/assets/styles/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVue)
app.use(AcroVueIcon)

app.mount('#app')
