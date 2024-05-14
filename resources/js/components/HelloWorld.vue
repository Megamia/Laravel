<template>
    <div class="hello">
        <div class="SiderBar">
            <SiderBar />
        </div>
        <div class="main">
            <HeaderLayout />
            <router-view />
        </div>
    </div>
</template>

<script>
import SiderBar from "./SiderBar.vue";
import HeaderLayout from "./HeaderLayout.vue";
export default {
    name: "HelloWorld",
    components: {
        SiderBar,
        HeaderLayout,
    },
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
    flex: 1;
    flex-direction: column;
}
.pagination {
    bottom: 30px;
    left: 0;
    display: flex;
    flex-direction: row;
}
</style>