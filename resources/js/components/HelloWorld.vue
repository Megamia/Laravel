<template>
  <div class="hello">
    <div class="SiderBar">
      <SiderBar />
    </div>
    <div class="main">
      <router-view />
      <!-- <PaginationLayout
        class="pagination"
        :selected-option="selectedOption"
        @update-selected-option="handleSelectedOptionChange"
      /> -->
    </div>
    <!-- <button @click="show">Show</button> -->
  </div>
</template>

<script>
import SiderBar from "./SiderBar.vue";
// import PaginationLayout from "./PaginationLayout.vue";

export default {
  name: "HelloWorld",
  components: {
    SiderBar,
    // PaginationLayout,
  },
  // data() {
  //   return {
  //     selectedOption: 1,
  //     selectedOptionText: "",
  //     options: [
  //       { id: 1, value: "Page1" },
  //       { id: 2, value: "Page2" },
  //       { id: 3, value: "Page3" },
  //       { id: 4, value: "Page4" },
  //     ],
  //   };
  // },
  // methods: {
  //   handleSelectedOptionChange(option) {
  //     this.selectedOption = option;
  //     // const selectedOptionPage = this.options.find(
  //     //   (option) => option.id === this.selectedOption
  //     // );
  //     if (this.selectedValue === 1 || this.selectedOptionTextIm === "Page1") {
  //       // alert("selectedOptionTextIm: " + this.selectedOptionTextIm);
  //       // alert("PageValue: " + selectedOptionPage.value);
  //       this.$router.push("/DashBoard");
  //     } else if (this.selectedValue === 2 || this.selectedOptionTextIm === "Page2") {
  //       // alert("selectedOptionTextIm: " + this.selectedOptionTextIm);
  //       // alert("PageValue: " + selectedOptionPage.value);
  //       this.$router.push("/UsersPage");
  //     } else if (this.selectedValue === 3 || this.selectedOptionTextIm === "Page3") {
  //       // alert("selectedOptionTextIm: " + this.selectedOptionTextIm);
  //       // alert("PageValue: " + selectedOptionPage.value);
  //       this.$router.push("/DocumentPage");
  //     }
  //   },

  //   show(option) {
  //     this.options.value = option;
  //     const selectedOption = this.options.find(
  //       (option) => option.id === this.selectedOption
  //     );
  //     if (selectedOption) {
  //       alert("Selected Option: " + this.selectedOption);
  //       alert("Option.Value: " + selectedOption.value);
  //       alert("Lựa chọn: " + this.selectedOptionTextIm);
  //     }
  //   },
  //   handleSelectedOptionUpdated(selectedOptionText) {
  //     this.selectedOptionText = selectedOptionText;
  //   },
  // },

  // computed: {
  //   selectedOptionTextIm() {
  //     const option = this.options.find((option) => option.id === this.selectedOption);
  //     return option ? option.value : "";
  //   },
  // },
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
  /* position: relative; */
  bottom: 30px;
  left: 0;
  display: flex;
  flex-direction: row;
}
/* .main-content{
} */
</style>
