<template>
  <div>
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "counter",
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapMutations(["increment"]),
  },
};
</script>

<style></style>
