<template>
    Users Manager
</template>

<script>
import { useMenu } from '../../../store/use-Menu.js'

export default {
    setup() {
        useMenu().onSelectedKeys(["admin-users"])
    }
}
</script>