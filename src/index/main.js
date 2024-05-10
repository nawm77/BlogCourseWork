import {createApp} from 'vue'
import VueSimpleAlert from "vue3-simple-alert";
import FlashMessage from '@smartweb/vue-flash-message'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import App from '@/index/App.vue'

const app = createApp(App)

app.use(FlashMessage)
app.use(VueSimpleAlert)
app.mount('#app')