<template>
    <a-card title="Users" style="width: 100%">
        <template #extra>
            <a-button type="primary">
                <router-link :to="{ name: 'admin-user-create' }">New Account</router-link>
            </a-button>
        </template>
        <div class="row">
            <div class="col-12">
                <a-table :dataSource="users" :columns="columns">
                    <template #bodyCell="{ column, index, record }">
                        <template v-if="column.key === 'index'">
                            <span>{{ index + 1 }}</span>
                        </template>
                        <template v-if="column.key === 'status'">
                            <span v-if="record.status_id == 1" class="text-success"> {{ record.status }}</span>
                            <span v-else-if="record.status_id == 0" class="text-danger">{{ record.status }}</span>
                        </template>
                        <template v-if="column.key === 'action'">

                        </template>
                    </template>
                </a-table>
            </div>
        </div>
    </a-card>
</template>

<script>
import { useMenu } from '../../../store/use-Menu.js'
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup() {
        const users = ref([])
        const columns = [{
            title: '#',
            key: 'index'
        }, {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
        }, {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        }, {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Department',
            dataIndex: 'departments',
            key: 'department',
        }, {    
            title: 'Status',
            dataIndex: 'status_id',
            key: 'status',
        }, {
            title: 'Action',
            key: 'action',
        },]
        const getUsers = () => {
            axios
                .get("http://127.0.0.1:8000/api/users")
                .then((result) => {
                    users.value = result.data
                })
                .catch((err) => {
                    console.log(err)
                });
        }
        getUsers();

        useMenu().onSelectedKeys(["admin-users"])
        return { users, columns }
    }
})
</script>