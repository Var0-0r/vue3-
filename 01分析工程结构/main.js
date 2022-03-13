//引入的不再是vue构造函数 引入的是creatApp的工厂函数
import { createApp } from 'vue'

import App from './App.vue'
//创建应用实例对象
const app = createApp(App);
//挂载
app.mount("#app");
// createApp(App).mount('#app')
