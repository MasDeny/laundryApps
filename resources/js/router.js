import Vue from "vue";
import Router from "vue-router";

import Home from "./layouts/Home.vue";
import Login from "./layouts/Login.vue";

import IndexOutlet from "./layouts/outlets/Index.vue";
import DataOutlet from "./layouts/outlets/Outlet.vue";
import AddOutlet from "./layouts/outlets/Add.vue";
import EditOutlet from "./layouts/outlets/Edit.vue";

import store from "./store.js";
import "./utils/compositionApi.js";

Vue.use(Router);

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        layout: "blank-layout"
    }
    //{
    //path: "Outlet",
    //component: IndexOutlet,
    //children: [
    //{
    //path: "",
    //name: "outlets.data",
    //component: DataOutlet,
    //meta: { title: "Manage Outlet" }
    //},
    //{
    //path: "add",
    //name: "outlets.add",
    //component: AddOutlet,
    //meta: { title: "Add New Outlet" }
    //},
    //{
    //path: "edit/:id",
    //name: "outlets.edit",
    //component: EditOutlet,
    //meta: { title: "Edit Outlet" }
    //}
    //]
    //}
];

const router = new Router({
    mode: "history",
    routes: routes.map(route => ({
        path: route.path,
        name: route.name,
        component: route.component,
        meta: route.meta,
        beforeEnter(to, from, next) {
            store.dispatch(
                "layoutModule/updateLayout",
                typeof route.layout == "undefined"
                    ? "default-layout"
                    : route.layout
            );
            next();
        }
    }))
});

// Natigation Guard
router.beforeEach((to, from, next) => {
    store.commit("CLEAR_ERRORS");
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let auth = store.getters.isAuth;
        if (!auth) {
            next({ name: "login" });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
