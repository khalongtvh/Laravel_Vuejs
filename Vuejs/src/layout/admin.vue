<template>
    <Header />
    <div class="container-fuild mt-3">
        <div class="row">
            <div class="col-sm-3 d-none d-sm-flex">
                <a-list bordered :data-source="data" style="width: 100%; height: 100%;">
                    <Menu />
                    <template #header>
                        <div>Menu</div>
                    </template>
                </a-list>
            </div>
            <div class="col-sm-9">
                CONTENT
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../components/TheHeader.vue"
import Menu from "../components/Menu.vue"
export default {
    components: {
        Header,
        Menu
    }
}
</script>