<template>
    <div>
        <ul>
            <li v-for="user in users" :key="user.id">
                <p>{{user}}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const users = ref([]);
const getPosts = () => {
    axios
        .get("/api/posts")
        .then((res) => (users.value = res.data))
        .catch((error) => console.log(error));
};

onMounted(() => {
    getPosts();
});
</script>
