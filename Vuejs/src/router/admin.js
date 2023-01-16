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
    }]
}]

export default admin;