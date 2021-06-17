import { createApp } from 'vue'
import App from './App.vue'

import liff from '@line/liff';

liff.init({liffId: import.meta.env.VITE_LIFF_ID}).then(() => {
  createApp(App).mount('#app')
})
