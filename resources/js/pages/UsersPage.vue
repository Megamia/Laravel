<template>
    <div class="main">
        <div class="Users">
            <div class="title">
                <span> Users </span>
            </div>
            <div class="search">
                <!-- <input type="text" placeholder="Search" class="searchinput" /> -->
                <input
                    type="text"
                    placeholder="Search"
                    class="searchinput"
                    v-model="search"
                />
                <div class="right">
                    <div class="button">
                        <span> Add user + </span>
                    </div>
                    <div class="sort">
                        <span>
                            Sort by
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                class="icon2"
                            >
                                <path
                                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                />
                            </svg>
                        </span>
                    </div>
                    <div class="savedsearch">
                        <span>
                            Saved search
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                class="icon2"
                            >
                                <path
                                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                />
                            </svg>
                        </span>
                    </div>
                    <div class="filter">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            class="icon"
                        >
                            <path
                                d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="listusers">
                <div class="loremlist">
                    <div class="loremdetail">
                        <span class="loremup"> Lorem ipsum </span>
                        <span class="loremdown"> 614 </span>
                    </div>
                    <div class="loremdetail">
                        <span class="loremup"> Lorem ipsum </span>
                        <span class="loremdown"> 124 </span>
                    </div>
                    <div class="loremdetail">
                        <span class="loremup"> Lorem ipsum </span>
                        <span class="loremdown"> 504 </span>
                    </div>
                    <div class="loremdetail">
                        <span class="loremup"> Lorem ipsum </span>
                        <span class="loremdown"> 100 </span>
                    </div>
                </div>
                <div class="function detailshare">
                    <div class="name">
                        <span>Name</span>
                    </div>
                    <div class="userid">
                        <span>User ID</span>
                    </div>
                    <div class="Loremipsum">
                        <span>Lorem ipsum</span>
                    </div>
                    <div class="date">
                        <span>Date</span>
                    </div>
                    <div class="Loremipsum">
                        <span>Lorem ipsum</span>
                    </div>
                    <div class="action">
                        <span>Action</span>
                    </div>
                </div>
                <template v-for="user in filteredUsers" :key="user.Name">
                    <div class="details">
                        <div class="detail detailshare">
                            <div class="namenrole name">
                                <span class="nameuser">{{ user.Name }} </span>
                            </div>
                            <div class="useridvalue userid">
                                <span> {{ user.UserID }} </span>
                            </div>
                            <div class="Loremipsumdetail Loremipsum">
                                <span>{{ user.Lorem }} </span>
                            </div>
                            <div class="time date">
                                <span> {{ user.Date }} </span>
                            </div>
                            <div class="Loremipsumdetail Loremipsum">
                                <span>{{ user.Lorem }} </span>
                            </div>
                            <div class="actions action">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    class="icon"
                                >
                                    <path
                                        d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    class="icon"
                                    @click="deleteUser(user)"
                                >
                                    <path
                                        d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const search = ref("");
const users = ref(store.state.DataUsersPage.users);

const deleteUser = (user) => {
    users.value.splice(users.value.indexOf(user), 1);
    alert("Xóa " + user.Name + " thành công!");
};

const filteredUsers = computed(() => {
    if (search.value) {
        return users.value.filter((user) => {
            return search.value
                .toLowerCase()
                .split(" ")
                .every((v) => user.Name.toLowerCase().includes(v));
        });
    } else {
        return users.value;
    }
});
</script>

<style scoped>
.main {
    background-color: #f5f5f5;
    padding-inline: 30px;
    padding-top: 20px;
}
.title {
    margin-left: 20px;
    font-size: 30px;
    font-weight: bold;
    color: #4a85f6;
}
.search {
    display: flex;
    flex-direction: row;
    padding-block: 20px;
}
.searchinput {
    border-radius: 15px;
    border-width: 0;
    padding-left: 30px;
    padding-block: 10px;
    display: flex;
    width: 60%;
    margin-right: 20px;
    height: 30px;
}
.icon {
    width: 20px;
    height: 20px;
    fill: #c5cee0;
    cursor: pointer;
}
.button {
    background-color: #4a85f6;
    padding-block: 10px;
    padding-inline: 20px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.button span {
    color: white;
}
.right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
}
.right span {
    font-size: 23px;
}
.sort,
.savedsearch,
.filter {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-inline: 20px;
}
.sort span,
.savedsearch span {
    font-weight: 550;
}
.icon2 {
    width: 10px;
    height: 10px;
}
.detailshare {
    padding-block: 25px;
    padding-inline: 20px;
    align-items: center;
}
.listusers {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 7px;
}
.loremlist {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f5f5f5;
    width: 100%;
}
.loremdetail {
    width: 19%;
    display: flex;
    flex-direction: column;
    padding: 25px;
    background-color: #ffffff;
    border-radius: 15px;
    gap: 15px;
}
.loremup {
    color: #8f9bb3;
}
.loremdown {
    font-weight: bold;
    font-size: 25px;
}
.function {
    display: flex;
    flex-direction: row;
    background-color: #eff4fa;
    color: #8f9bb3;
    padding-inline: 30px;
    font-size: 21px;
}
.name {
    width: 20%;
}
.nameuser {
    font-weight: bold;
    font-size: 20px;
    color: black;
    margin-left: 20px;
}

.userid {
    width: 15%;
}
.Loremipsum {
    width: 20%;
}
.date {
    width: 20%;
}
/* .createdate {
} */
.role {
    flex: 1;
    display: flex;
}
.action {
    /* width: 5%; */
    display: flex;
    flex: 1;
}
.actions {
    display: flex;
    flex: 1;
    justify-content: space-between;
}
.user {
    display: flex;
    flex-direction: column;
    padding-inline-start: 20px;
}
.email {
    color: #8f9bb3;
}
.buttonper {
    display: flex;
    align-items: center;
    background-color: #0095ff;
    border-radius: 13px;
    padding: 10px;
    color: #ffffff;
    font-weight: bold;
    width: 150px;
    justify-content: center;
}
.employee {
    background-color: #eff4fa;
    color: #8f9bb3;
}
.details {
    padding-inline: 20px;
}
.detail {
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid #eff4fa;
}
.namenrole {
    display: flex;
    flex-direction: row;
    color: #8f9bb3;
}
</style>
