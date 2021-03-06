// import 'animate.css'
// import 'normalize.css'
import '@icon-park/vue-next/styles/index.css';
import 'virtual:windi-devtools';
import 'virtual:windi.css';
import { createApp } from 'vue';
import App from './App.vue';
import { setupElementPlus } from './plugins/element-plus';
import { setupVant } from './plugins/vant';
import router from './router/';
import store from './store/';




const app = createApp(App)

// 使用element-plus插件
setupElementPlus(app)
// 使用vant插件
setupVant(app)

app.config.globalProperties.$$refs = {}

// if (import.meta.env.DEV) {
window.$$refs = app.config.globalProperties.$$refs
// }
app.use(router).use(store)
// 路由准备完毕再挂载
router.isReady().then(() => app.mount('#app'))
