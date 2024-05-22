<template>
    <div class="hir">
        <div class="Account">
            <h1>Account</h1>
            <table class="user-table">
                <tr>
                    <th>Userid</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
                <tr v-for="user in dataAccount" :key="user.id">
                    <th>
                        <span> {{ user.id }}</span>
                    </th>
                    <th>
                        <span> {{ user.name }}</span>
                    </th>
                    <th>
                        <span> {{ user.email }}</span>
                    </th>
                </tr>
            </table>
        </div>
        <div class="UserDashBoard">
            <h1>User DashBoard</h1>
            <table class="user-table">
                <tr>
                    <th>Userid</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
                <tr v-for="user in dataUserDashBoard" :key="user.id">
                    <th>
                        <span> {{ user.id }}</span>
                    </th>
                    <th>
                        <span> {{ user.name }}</span>
                    </th>
                    <th>
                        <span> {{ user.email }}</span>
                    </th>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const dataAccount = ref([]);
const dataUserDashBoard = ref([]);
const fetchData = async () => {
    try {
        const response1 = await axios.get(`${import.meta.env.VITE_APP_URL_API}/users`);
        const response2 = await axios.get(`${import.meta.env.VITE_APP_URL_API}/data`);
        dataAccount.value = response1.data.dataUser;
        dataUserDashBoard.value = response2.data.data;
        // console.log(dataAccount.value);
    } catch (e) {
        console.log("Error: " + e);
    }
};

onMounted(fetchData);
</script>

<style scoped>
.Account,
.UserDashBoard {
    h1 {
        display: flex;
        justify-content: center;
    }
}
.user-table {
    /* display: flex; */
    /* flex: 1; */
    /* flex-direction: column; */
    width: 100%;
    border-collapse: collapse;
    .clmUserid {
        width: 100px;
    }
}

.user-table th {
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.user-table th:first-child {
    width: 100px;
    text-align: center;
}

.user-table th:nth-child(2) {
    width: 300px;
    text-align: center;
}
.user-table th:last-child {
    width: full;
}

.user-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.user-table tbody tr:nth-child(odd) {
    background-color: #f9f9f9;
}

.user-table tbody tr:hover {
    background-color: #f2f2f2;
}
</style>
