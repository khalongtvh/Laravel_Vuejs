const admin = [{
    path: "/admin",
    component: () =>
        import ('../layout/admin.vue'),
    children: [{
        path: "users",
        name: "admin-users",
        component: () =>
            import ('../pages/admin/users/index.vue')
    }]
}]

export default admin;