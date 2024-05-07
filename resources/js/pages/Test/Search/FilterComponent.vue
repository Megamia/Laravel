<template>
  <div>
    <input type="text" v-model="search" />
    <button @click="add">add</button>

    <ul v-for="user in filteredUsers" :key="user.Name">
      <li @click="check(user)">{{ user.Name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const name = ref("");
const store = useStore();
const users = ref(store.state.DataDashBoard.users);
const search = ref("");

const check = (user) => {
  alert(user.Name);
};

const add = () => {
  users.value.push({ Name: name.value });
  alert("Đã thêm " + name.value + " thành công!");
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
li {
  cursor: pointer;
}
</style>
