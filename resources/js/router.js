import { createRouter, createWebHistory } from "vue-router";
// import App from "./App.vue";
import DashBoard from "./pages/DashBoard.vue";
import PhotoPage from "./pages/PhotoPage.vue";
import DocumentPage from "./pages/DocumentPage.vue";
import TestPage from "./pages/Test/TestPage.vue";
import PaginationLayout from "./components/PaginationLayout.vue";
import HierarchyPage from "./pages/HierarchyPage.vue";
import TestModal from "./pages/Test/TestModal.vue";
import AddModal from "./pages/Test/AddModal.vue";
import TestPage1 from "./pages/Test/TestPage1.vue";
import TestPage2 from "./pages/Test/TestPage2.vue";
import FilterComponent from "./pages/Test/Search/FilterComponent.vue";
import LoginPage from "./pages/Test/LoginPage.vue";
import RegisterPage from "./pages/Test/RegisterPage.vue";
import PostIndex from "./pages/PostIndex.vue";
import UsersPage from "./pages/UsersPage.vue";
// import SiderBar from "./components/SiderBar.vue";
// import HelloWorld from "./components/HelloWorld.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: "/", component: HelloWorld, name: "App" },
        {
            path: "/",
            component: DashBoard,
            name: "App",
            meta: { requiresAuth: "showAll" },
        },
        {
            path: "/DashBoard",
            component: DashBoard,
            name: "DashBoard",
            meta: { requiresAuth: "showAll" },
        },

        {
            path: "/PhotoPage",
            component: PhotoPage,
            name: "PhotoPage",
            meta: { requiresAuth: "showAll" },
        },
        {
            path: "/UsersPage",
            component: UsersPage,
            name: "UsersPage",
            meta: { requiresAuth: "showAll" },
        },
        {
            path: "/DocumentPage",
            component: DocumentPage,
            name: "DocumentPage",
            meta: { requiresAuth: "showAll" },
        },
        {
            path: "/TestPage",
            component: TestPage,
            name: "TestPage",
            meta: { requiresAuth: "showSiderbar" },
        },
        {
            path: "/PaginationLayout",
            component: PaginationLayout,
            name: "PaginationLayout",
        },
        {
            path: "/HierarchyPage",
            component: HierarchyPage,
            name: "HierarchyPage",

            meta: { requiresAuth: "showSiderbar" },
        },
        {
            path: "/TestModal",
            component: TestModal,
            name: "TestModal",
            meta: { requiresAuth: "showSiderbar" },
        },
        {
            path: "/AddModal",
            component: AddModal,
            name: "AddModal",
            meta: { requiresAuth: "showAll" },
        },
        {
            path: "/TestPage1",
            component: TestPage1,
            name: "TestPage1",
            meta: { requiresAuth: "showAll" },
        },
        {
            path: "/TestPage2",
            component: TestPage2,
            name: "TestPage2",
            meta: { requiresAuth: "showAll" },
        },
        {
            path: "/FilterComponent",
            component: FilterComponent,
            name: "FilterComponent",
        },
        {
            path: "/Login",
            component: LoginPage,
            name: "LoginPage",
            meta: { requiresAuth: "unShow" },
        },
        {
            path: "/Register",
            component: RegisterPage,
            name: "RegisterPage",
            meta: { requiresAuth: "unShow" },
        },
        {
            path: "/Post",
            component: PostIndex,
            name: "PostIndex",
            meta: { requiresAuth: "unShow" },
        },
    ],
});

export default router;
