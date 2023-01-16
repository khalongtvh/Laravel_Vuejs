import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.css'
import {
    Button,
    message,
    Drawer,
    List,
    Menu,
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
app.use(router)
app.use(Button)
app.use(Drawer)
app.use(List)
app.use(Menu)
app.mount('#app')

app.config.globalProperties.$message = message;