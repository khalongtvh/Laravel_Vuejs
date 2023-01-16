<template>
    <div class="container-fuild">
        <div class="row text-white" style="background-color: green; padding: 1rem">
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showMenu"> <i class="fa-solid fa-align-justify"></i></span>
            </div>
            <div class="col-9 d-flex align-items-center justify-content-center justify-content-sm-start">
                <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" role="img" class="iconify iconify--logos" width="37.07" height="36"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 198">
                        <path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path>
                        <path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path>
                        <path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path>
                    </svg></span>
                <span>Quản trị</span>
            </div>
            <div class="col-3 d-none d-sm-flex justify-content-end justify-content-center align-items-center">
                <span>Admin</span>
            </div>
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showAdmin"><i class=" fa-solid fa-user"></i></span>
            </div>
        </div>
    </div>
    <a-drawer v-model:visible="visible_menu" title="Menu" placement="left">
        <Menu />
    </a-drawer>
    <a-drawer v-model:visible="visible_admin" title="Amin" placement="right">
        <p>Admin 1...</p>
        <p>Admin 2...</p>
        <p>Admin 3...</p>
    </a-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Menu from '../components/Menu.vue'

export default defineComponent({
    components: {
        Menu
    },
    setup() {
        const visible_menu = ref(false);
        const visible_admin = ref(false);
        const showMenu = () => {
            visible_menu.value = true;
        };
        const showAdmin = () => {
            visible_admin.value = true;
        };
        return {
            visible_menu,
            visible_admin,
            showMenu,
            showAdmin,
        };
    },
});
</script>