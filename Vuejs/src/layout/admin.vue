<template>
    <Header />
    <div class="container-fuild">
        <div class="row">
            <div class="col-sm-3 d-none d-sm-flex">
                SIDER BAR
            </div>
            <div class="col-sm-12">
                CONTENT
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>
<script>
import Header from "../components/TheHeader.vue"
export default {
    components: {
        Header
    }
}
</script>