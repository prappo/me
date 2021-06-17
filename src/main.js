import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { anim } from './libs/animation'

createApp(App).mount('#app')
anim.moveMyImage()

