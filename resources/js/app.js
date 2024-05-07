import "./bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import VueAxios from 'vue-axios';
import axios from 'axios';
import { store } from "../../storage/store/store";
import DashBoard from '../js/pages/DashBoard.vue';
import PhotoPage from "../js/pages/PhotoPage.vue";
import UsersPage from "../js/pages/UsersPage.vue";
import DocumentPage from "../js/pages/DocumentPage.vue";
import TestPage from "../js/pages/Test/TestPage.vue";
import PaginationLayout from './components/PaginationLayout.vue'
import HierarchyPage from "../js/pages/HierarchyPage.vue";
import TestModal from "../js/pages/Test/TestModal.vue";
import AddModal from "../js/pages/Test/AddModal.vue";
import TestPage1 from "../js/pages/Test/TestPage1.vue";
import TestPage2 from "../js/pages/Test/TestPage2.vue";
import FilterComponent from "../js/pages/Test/Search/FilterComponent.vue";
import Register from "../js/pages/Test/RegisterPage.vue";
import Login from "../js/pages/Test/LoginPage.vue";
import PostIndex from "../js/pages/PostIndex.vue";
const routes = [

    { path: "/App", component: App },
    { path: "/DashBoard", component: DashBoard },
    { path: "/PhotoPage", component: PhotoPage },
    { path: "/UsersPage", component: UsersPage },
    { path: "/DocumentPage", component: DocumentPage },
    { path: "/TestPage", component: TestPage },
    { path: "/PaginationLayout", component: PaginationLayout },
    { path: "/HierarchyPage", component: HierarchyPage },
    { path: "/TestModal", component: TestModal },
    { path: "/AddModal", component: AddModal },
    { path: "/TestPage1", component: TestPage1 },
    { path: "/TestPage2", component: TestPage2 },
    { path: "/FilterComponent", component: FilterComponent },
    { path: "/Login", component: Login },
    { path: "/Register", component: Register },
    { path: "/Post", component: PostIndex },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).use(store).use(VueAxios,axios).mount("#app");
