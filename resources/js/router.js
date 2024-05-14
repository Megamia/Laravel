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
        { path: "/", component: DashBoard, name: "App" },
        { path: "/DashBoard", component: DashBoard, name: "DashBoard" },

        { path: "/PhotoPage", component: PhotoPage, name: "PhotoPage" },
        { path: "/UsersPage", component: UsersPage, name: "UsersPage" },
        { path: "/DocumentPage", component: DocumentPage, name: "DocumentPage" },
        { path: "/TestPage", component: TestPage, name: "TestPage" },
        { path: "/PaginationLayout", component: PaginationLayout, name: "PaginationLayout" },
        { path: "/HierarchyPage", component: HierarchyPage, name: "HierarchyPage" },
        { path: "/TestModal", component: TestModal, name: "TestModal" },
        { path: "/AddModal", component: AddModal, name: "AddModal" },
        { path: "/TestPage1", component: TestPage1, name: "TestPage1" },
        { path: "/TestPage2", component: TestPage2, name: "TestPage2" },
        { path: "/FilterComponent", component: FilterComponent, name: "FilterComponent" },
        { path: "/Login", component: LoginPage, name: "LoginPage" },
        { path: "/Register", component: RegisterPage, name: "RegisterPage"},
        { path: "/Post", component: PostIndex, name: "PostIndex" },
    ],
});

export default router;
