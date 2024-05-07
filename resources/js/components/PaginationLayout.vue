<template>
  <div class="main">
    <span>Items per page:</span>
    <select v-model="selectedValue" class="btnselect" @change="showalert">
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.value }}
      </option>
    </select>
    <!-- <p>Giá trị được chọn: {{ selectedOptionText }}</p> -->
    <p>{{ selectedValue }} of {{ options.length }}</p>
    <div class="btn">
      <button class="btn prev" @click="del" :disabled="selectedOption <= 1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="icon">
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
      </button>
      <button class="btn next" @click="add" :disabled="selectedOption >= options.length">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="icon">
          <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
          />
        </svg>
      </button>
    </div>
    <button @click="Show">Show</button>
  </div>
</template>

<script>
export default {
  name: "PaginationLayout",
  props: {
    selectedOption: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      selectedValue: this.selectedOption,
      options: [
        { id: 1, value: "Page1" },
        { id: 2, value: "Page2" },
        { id: 3, value: "Page3" },
        { id: 4, value: "Page4" },
      ],
    };
  },

  methods: {
    add() {
      const nextValue = this.selectedValue + 1;
      this.selectedValue = nextValue;
      this.$emit("update-selected-option", nextValue);
    },
    del() {
      const prevValue = this.selectedValue - 1;
      this.selectedValue = prevValue;
      this.$emit("update-selected-option", prevValue);
    },
    Show() {
      alert("Select Option: " + this.selectedOption);
    },
    showalert() {
      alert("Lựa chọn: " + this.selectedOptionText);
      this.$emit("update-selected-option", this.selectedOptionText);
    },

    onSelectedOptionUpdated(selectedOptionText) {
      this.selectedOptionText = selectedOptionText;
    },
    handleSelectedOptionUpdated(value) {
      this.selectedOptionText = value;
    },
    handleSelectedOptionChange() {
      this.$emit("selected-option-updated", this.selectedOptionTextIm);
    },
  },

  computed: {
    selectedOptionText() {
      const option = this.options.find((option) => option.id === this.selectedValue);
      return option ? option.value : "";
    },
  },
};
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100px;
  gap: 30px;
}
.btnselect {
  border-width: 0;
  border-bottom: 1px solid black;
  padding: 5px;
  background-color: #f5f5f5;
}
.btn {
  border-width: 0;
  background-color: #f5f5f5;
  cursor: pointer;
}
.btn button {
  margin-inline: 10px;
}
.btn:disabled {
  fill: gray;
}
.icon {
  width: 15px;
  height: 15px;
}
</style>
