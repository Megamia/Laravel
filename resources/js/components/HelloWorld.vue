<template>
    <div class="hello">
        <div class="SiderBar">
            <SiderBar v-if="showSiderBar()" />
        </div>
        <div class="main">
            <HeaderLayout v-if="showHeaderLayout()" />
            <router-view />
        </div>
    </div>
</template>

<script setup>
import SiderBar from "./SiderBar.vue";
import HeaderLayout from "./HeaderLayout.vue";
import { useRoute } from "vue-router";

const route = useRoute();
// console.log("route.meta:", route.meta);

const showSiderBar = () => {
    if (
        route.meta.requiresAuth === "showSiderbar" ||
        route.meta.requiresAuth === "showAll"
    ) {
        return true;
    } else {
        return false;
    }
};
const showHeaderLayout = () => {
    if (
        route.meta.requiresAuth === "showHeaderLayout" ||
        route.meta.requiresAuth === "showAll"
    ) {
        return true;
    } else {
        return false;
    }
};
</script>

<style scoped>
.hello {
    display: flex;
    flex-direction: row;
    flex: 1;
    background-color: #ffffff;
}
.SiderBar {
    display: flex;
}
.main {
    display: flex;
    flex:1;
    height: 100%;
    padding-bottom: 50px;
    flex-direction: column;
}

</style>
