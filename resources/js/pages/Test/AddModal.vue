<template>
  <template v-for="(fruit, index) in fruits" :key="index">
    <div class="bg">
      {{ fruit.name }}
    </div>
    <v-btn @click="deleteFruit(fruit)" class="button"> Delete {{ fruit.name }} </v-btn>
  </template>

  <br /><br />
  <v-btn @click="addFruit" class="button">Add {{ this.newfr }}</v-btn>
  <v-btn @click="deleteFirst" class="button"> Delete First </v-btn>
  <v-btn @click="deleteLast" class="button"> Delete Last </v-btn>
  <input type="text" v-model="newfr" />
</template>
<script>
export default {
  name: "AddModal",
  data() {
    return {
      newfr: "",
      fruits: [
        { id: 1, name: "apple" },
        { id: 2, name: "orange" },
        { id: 3, name: "grapes" },
        { id: 4, name: "pear" },
      ],
    };
  },
  methods: {
    deleteFruit(fruit) {
      this.fruits.splice(this.fruits.indexOf(fruit), 1);
      alert("Xóa " + fruit.name + " thành công!");
    },
    addFruit() {
      this.fruits.push({ id: this.fruits.length + 1, name: this.newfr });
      alert("Đã thêm " + this.newfr + " thành công!");
    },

    deleteFirst() {
      this.fruits.shift();
    },
    deleteLast() {
      this.fruits.pop();
    },
  },
};
</script>

<style scoped>
.bg {
  padding: 20px;
  background-color: red;
  color: white;
  font-size: 20px;
}
.button {
  cursor: pointer;
  padding: 10px;
  background-color: blue;
  margin-block: 20px;
}
</style>
