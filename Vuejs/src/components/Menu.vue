<template>
    <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="admin-users">
            <router-link :to="{ name: 'admin-users' }">
                <span><i class="fa-solid fa-user me-2"></i>Users</span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-roles">
            <router-link :to="{ name: 'admin-roles' }">
                <span><i class="fa-solid fa-tag me-2"></i>Roles</span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-settings">
            <router-link :to="{ name: 'admin-settings' }">
                <span> <i class="fa-solid fa-gear me-2"></i>Settings</span>
            </router-link>
        </a-menu-item>
    </a-menu>
</template>

<script>

import { defineComponent } from 'vue';
import { useMenu } from '../store/use-Menu.js'
import { MessageOutlined } from '@ant-design/icons-vue';

import { storeToRefs } from 'pinia';

export default defineComponent({
    components: {
        MessageOutlined,
    },
    setup() {
        const storeMenu = useMenu();
        return {
            ...storeToRefs(storeMenu)
        };
    },
});
</script>