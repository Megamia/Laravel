<template>
  <div>
    <template v-for="user in users" :key="user.Name">
      <div class="photo">
        <span>{{ user.Name }}</span>
      </div>
    </template>
  </div>
</template>

<script>
import { ref } from "vue";
import { store } from "../../../storage/store/store";
export default {
  setup() {
    const users = ref(store.state.DataDashBoard.users);

    return { users };
  },

  name: "PhotoPage"
};
</script>

<style scoped>
.photo {
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 30px;
  font-weight: bold;
}
</style>