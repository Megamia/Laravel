<template>
    <div class="sidebar">
        <div class="logo">
            <span> YOURLOGO </span>
        </div>
        <div class="router">
            <div class="page page1">
                <span class="list">
                    <router-link
                        to="/DashBoard"
                        class="link"
                        @click="handlePageChange('DashBoard')"
                        :class="{ act: currentPage === 'DashBoard' }"
                    >
                        <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 60 60"
                            class="icon"
                        >
                            <path
                                d="M49,38h-7V22h7c6.065,0,11-4.935,11-11S55.065,0,49,0S38,4.935,38,11v7H22v-7c0-6.065-4.935-11-11-11S0,4.935,0,11
	s4.935,11,11,11h7v16h-7C4.935,38,0,42.935,0,49s4.935,11,11,11s11-4.935,11-11v-7h16v7c0,6.065,4.935,11,11,11s11-4.935,11-11
	S55.065,38,49,38z M42,11c0-3.859,3.14-7,7-7s7,3.141,7,7s-3.14,7-7,7h-7V11z M11,18c-3.86,0-7-3.141-7-7s3.14-7,7-7s7,3.141,7,7v7
	H11z M18,49c0,3.859-3.14,7-7,7s-7-3.141-7-7s3.14-7,7-7h7V49z M22,38V22h16v16H22z M49,56c-3.86,0-7-3.141-7-7v-7h7
	c3.86,0,7,3.141,7,7S52.86,56,49,56z"
                            /></svg
                        >Dashboard</router-link
                    >
                </span>
                <span class="list">
                    <router-link
                        to="/UsersPage"
                        class="link"
                        @click="handlePageChange('UsersPage')"
                        :class="{ act: currentPage === 'UsersPage' }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            class="icon"
                        >
                            <path
                                d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"
                            /></svg
                        >Users</router-link
                    >
                </span>
                <span class="list">
                    <router-link
                        to="/DocumentPage"
                        class="link"
                        @click="handlePageChange('DocumentPage')"
                        :class="{ act: currentPage === 'DocumentPage' }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            class="icon"
                        >
                            <path
                                d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"
                            /></svg
                        >Documents</router-link
                    >
                </span>
                <span class="list">
                    <router-link
                        to="/TestModal"
                        class="link"
                        @click="handlePageChange('TestModal')"
                        :class="{ act: currentPage === 'TestModal' }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="icon"
                        >
                            <path
                                d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                            /></svg
                        >Photos</router-link
                    >
                </span>
                <span class="list">
                    <router-link
                        to="/HierarchyPage"
                        class="link"
                        @click="handlePageChange('HierarchyPage')"
                        :class="{ act: currentPage === 'HierarchyPage' }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            class="icon"
                        >
                            <path
                                d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"
                            /></svg
                        >Hierarchy</router-link
                    >
                </span>
            </div>
            <div class="page page2">
                <span class="list">
                    <router-link
                        to="/TestPage"
                        class="link"
                        @click="handlePageChange('TestPage')"
                        :class="{ act: currentPage === 'TestPage' }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="icon"
                        >
                            <path
                                d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"
                            /></svg
                        >Message</router-link
                    >
                </span>
                <span class="list">
                    <router-link
                        to="/Post"
                        class="link"
                        @click="handlePageChange('Post')"
                        :class="{ act: currentPage === 'Post' }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="icon"
                        >
                            <path
                                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                            /></svg
                        >Help</router-link
                    >
                </span>
                <span class="list">
                    <router-link
                        to="/FilterComponent"
                        class="link"
                        @click="handlePageChange('FilterComponent')"
                        :class="{ act: currentPage === 'FilterComponent' }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="icon"
                        >
                            <path
                                d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                            /></svg
                        >Setting</router-link
                    >
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const currentPage = ref(localStorage.getItem("currentPage") || "DashBoard");

const handlePageChange = (page) => {
    currentPage.value = page;
    localStorage.setItem("currentPage", page);
};

// onMounted(() => {
//     localStorage.removeItem("currentPage");
// });
</script>

<style scoped>
.sidebar {
    width: 300px;
    margin-top: 50px;
    margin-left: 40px;
}
.logo {
    font-weight: bold;
    margin-bottom: 50px;
    font-size: 30px;
}
.page {
    display: flex;
    flex-direction: column;
}
.page span {
    display: flex;
    flex: 1;
    font-size: 25px;
}
.page span a {
    display: flex;
    flex: 1;
    text-decoration: none;
    align-items: center;
}

.page span svg {
    margin-right: 10px;
}

/* .active {
    border-right: 3px solid #0d99ff !important;
    fill: #0d99ff !important;
    font-weight: bold !important;
    color: #0d99ff !important;
} */
.act {
    border-right: 3px solid #0d99ff !important;
    fill: #0d99ff !important;
    font-weight: bold !important;
    color: #0d99ff !important;
}

.router a {
    color: #757575;
    fill: #757575;
}

.page1 {
    margin-bottom: 50px;
}
.list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    fill: #bfbfbf;
}
.list span {
    display: flex;
    align-items: center;
}

.list a {
    display: flex;
    flex-direction: row;
    padding-block: 20px;
}

.icon {
    width: 25px;
    height: 25px;
}
</style>
