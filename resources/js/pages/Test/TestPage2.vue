<template>
  <div class="count">
    <input type="text" v-model="newus" />
    <button @click="increament">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="addUser">AddUser</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  data() {
    return {
      newus: "",
    };
  },
  methods: {
    increament() {
      this.$store.state.result++;
    },
    decrement() {
      this.$store.state.result--;
    },
    addUser() {
      this.users.push({ Name: this.newus });
      alert("Đã thêm " + this.newus + " thành công!");
    },
  },
  setup() {
    const store = useStore();
    const result = computed(() => store.state.result);
    const users = computed(() => store.state.DataDashBoard.users);

    return { result, users };
  },
};
</script>

<style scoped></style>
