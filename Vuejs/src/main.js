import './style.css'
import './static/fontawesome-free-6.2.1-web/css/all.min.css'

import axios from 'axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

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
    Card,
    Table,
    Avatar,
    Select,
    Input,
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

window.axios = axios;
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Select)
app.use(Avatar)
app.use(Input)
app.use(Button)
app.use(Table)
app.use(Card)
app.use(Drawer)
app.use(List)
app.use(Menu)
app.mount('#app')

app.config.globalProperties.$message = message;