<template>
  <div class="jokes">
    <div v-if="!joke">Loading...</div>
    <div v-else class="jokes__joke">
      <img :src="joke.icon_url" />
      <p>{{ joke.value }}</p>
      <button class="btn" @click="getJoke">Gimme a new one</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "joke",
  created() {
    this.getJoke();
  },
  data() {
    return {
      joke: null,
    };
  },
  methods: {
    async getJoke() {
      const res = await fetch(`https://api.chucknorris.io/jokes/random`);
      const joke = await res.json();
      this.joke = joke;
    },
  },
};
</script>

<style>
.btn {
  padding: 16px;
  font-size: 16px;
  background: orange;
  border-radius: 8px;
  color: purple;
  border: none;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
}
.btn:hover {
  color: orange;
  background: purple;
}
</style>
