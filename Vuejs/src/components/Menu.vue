<template>
    <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="admin-users">
            <router-link :to="{ name: 'admin-users' }">
                <span>Users</span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-roles">
            <router-link :to="{ name: 'admin-roles' }">
                <span>Roles</span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-settings">
            <router-link :to="{ name: 'admin-settings' }">
                <span>settings</span>
            </router-link>
        </a-menu-item>
    </a-menu>
</template>

<script>
import { defineComponent } from 'vue';
import { useMenu } from '../store/use-Menu.js'
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const storeMenu = useMenu();
        return {
            ...storeToRefs(storeMenu)
        };
    },
});
</script>