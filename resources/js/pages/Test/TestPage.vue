<template>
  <!-- <div class="about">
    <div class="show">
      <button id="show-modal" @click="showModal = true">Show Modal</button>
    </div>
    <AddModal v-if="showModal" @close="showModal = false" />
    <modal v-if="showModal" @close="showModal = false"></modal>
  </div> -->
  <div>
    <Test1 />
    <Test2 />
  </div>
</template>

<script>
import Test1 from "./TestPage1.vue";
import Test2 from "./TestPage2.vue";

export default {
  components: {
    Test1,
    Test2,
  },
};
</script>
