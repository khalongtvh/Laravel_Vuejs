const admin = [{
    path: "/admin",
    component: () =>
        // import layout
        import ('../layout/admin.vue'),
    // router children
    children: [
        // User Manager
        {
            path: "users",
            name: "admin-users",
            component: () =>
                import ('../pages/admin/users/index.vue')
        }, {
            path: "users/create-new",
            name: "admin-user-create",
            component: () =>
                import ('../pages/admin/users/create.vue')
        },
        // Product Manager
        {
            path: "products",
            name: "admin-products",
            component: () =>
                import ('../pages/admin/products/index.vue')
        },
        // Roles Manager
        {
            path: "roles",
            name: "admin-roles",
            component: () =>
                import ('../pages/admin/roles/index.vue')
        }, {
            path: "settings",
            name: "admin-settings",
            component: () =>
                import ('../pages/admin/settings/index.vue')
        }
    ]
}]

export default admin;