<template>
  <div class="result">
    <p>Kết quả là {{ result }}</p>
    <p v-for="user in users" :key="user.Name">Username: {{ user.Name }}</p>
    <!-- <button>Text: {{ text }}</button> -->
    <span>Props:{{ userWithEmail }} </span>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  // data() {
  //   return {
  //     users: [
  //       {
  //         Name: "Victoria Perez",
  //         UserID: "LA-0234",
  //         Lorem: "Lorem Ipsum",
  //         Date: "30 Apr, 2017 to 24 Otc 2020",
  //       },
  //       {
  //         Name: "Lena Page",
  //         UserID: "LA-0234",
  //         Lorem: "Lorem Ipsum",
  //         Date: "21 Aug, 2019 to 24 Otc 2020",
  //       },
  //       {
  //         Name: "Devin Harmon",
  //         UserID: "LA-0234",
  //         Lorem: "Lorem Ipsum",
  //         Date: "21 July, 2019 to 26 July 2020",
  //       },
  //       {
  //         Name: "Rena Paul",
  //         UserID: "LA-0234",
  //         Lorem: "Lorem Ipsum",
  //         Date: "30 Apr, 2017 to 24 Otc 2020",
  //       },
  //     ],
  //   };
  // },
  setup() {
    const store = useStore();
    const result = computed(() => store.state.result);
    const users = computed(() => store.state.DataDashBoard.users);

    return { result, users };
  },

  props: ["userWithEmail"]
};
</script>

<style scoped></style>