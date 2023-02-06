<template>
    <a-card title="Create New Account" style="width: 100%;">
        <div class="row">
            <div class="col-12 col-sm-4">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center mb-3">
                        <a-avatar shape="square" :size="200">
                            <template #icon>
                                <img src="../../../assets/vue.svg" alt="">
                            </template>
                        </a-avatar>
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <a-button type="primary pe-4">Add Image</a-button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-8">
                <div class="row mb-3">
                    <div class="col-12 col-sm-3">
                        <label>
                            <span class=" me-1">Status</span>
                            <span class="text-danger">*</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-select show-search placeholder="Select a status" style="width: 100%" :options="status"
                            :filter-option="filterOption"></a-select>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-3">
                        <label>
                            <span class=" me-1">Username</span>
                            <span class="text-danger">*</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input v-model:value="username" placeholder="Username" allow-clear />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-3">
                        <label>
                            <span class=" me-1">Full Name</span>
                            <span class="text-danger">*</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input v-model:value="name" placeholder="Full Name" allow-clear />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-3">
                        <label>
                            <span class=" me-1">Email</span>
                            <span class="text-danger">*</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input v-model:value="email" placeholder="Email" allow-clear />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-3">
                        <label>
                            <span class=" me-1">Password</span>
                            <span class="text-danger">*</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input-password v-model:value="password" placeholder="Password" allow-clear />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-3">
                        <label>
                            <span class=" me-1">Department</span>
                            <span class="text-danger">*</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-select show-search placeholder="Select a department" style="width: 100%"
                            :options="departments" :filter-option="filterOption"></a-select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 d-flex justify-content-end">
                <a-button type="light me-3"><router-link :to="{ name: 'admin-users' }">Cancel</router-link></a-button>
                <a-button type="primary">Save</a-button>
            </div>
        </div>
    </a-card>
</template>
<script>
import axios from 'axios'
import { defineComponent, ref } from 'vue'
import { useMenu } from '../../../store/use-Menu.js'
export default defineComponent({
    setup() {
        const departments = ref([])
        const status = ref([])
        useMenu().onSelectedKeys(["admin-users"])

        const getUserCreate = () => {
            axios.get('http://127.0.0.1:8000/api/users/create')
                .then((response => {
                    departments.value = response.data.departments
                    status.value = response.data.status
                    console.log(response.data.departments)
                }))
                .catch((error) => {
                    console.log(error.message)
                });
        }

        const filterOption = (input, option) => {
            return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };
        getUserCreate()
        return {
            status, departments, filterOption
        }
    }
})
</script>