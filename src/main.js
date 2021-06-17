import { createApp } from 'vue'
import App from './App.vue'

import liff from '@line/liff';

liff.init({liffId: import.meta.env.VITE_LIFF_ID}).then(() => {
  if (!liff.isLoggedIn()) {
    liff.login();
  } else {
    createApp(App).mount('#app')
  }
}).catch((err) => {
  console.error(err)
})
