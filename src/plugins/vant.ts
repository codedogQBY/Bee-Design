import '@vant/touch-emulator'
import { Lazyload } from 'vant'
import 'vant/lib/index.css'
import type { App } from 'vue'


export const setupVant = (app: App) => {
  app.use(Lazyload)
}
