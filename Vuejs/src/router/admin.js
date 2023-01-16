const admin = [{
    path: "/admin",
    component: () =>
        // import layout
        import ('../layout/admin.vue'),
    // router children
    children: [{
        path: "users",
        name: "admin-users",
        component: () =>
            import ('../pages/admin/users/index.vue')
    }, {
        path: "products",
        name: "admin-products",
        component: () =>
            import ('../pages/admin/products/index.vue')
    }, {
        path: "roles",
        name: "admin-roles",
        component: () =>
            import ('../pages/admin/roles/index.vue')
    }, {
        path: "settings",
        name: "admin-settings",
        component: () =>
            import ('../pages/admin/settings/index.vue')
    }]
}]

export default admin;