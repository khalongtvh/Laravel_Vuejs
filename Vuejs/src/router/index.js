import { createRouter, createWebHistory } from 'vue-router';
// link admin
import admin from './admin.js'

// lấy các tham số trong admin
const routes = [...admin];
console.log(routes)
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;