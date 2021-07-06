<template>
  <nav class="nav">
    <router-link :to="{ name: 'home' }">
      Home
    </router-link>
    <router-link :to="{ name: 'jokes' }">
      Jokes
    </router-link>
    <router-link :to="{ name: 'counter' }">
      Counter
    </router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script>
import LogRocket from "logrocket";

export default {
  name: "App",
  components: {},
  created() {
    LogRocket.init("umk7ez/testingvue");
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
}
main {
  padding: 48px;
}
.nav {
  display: flex;
  background: #e4e4e4;
  margin-bottom: 48px;
}
.nav a {
  display: inline-block;
  padding: 16px;
  text-decoration: none;
  font-size: 16px;
  color: #2c3e50;
}
</style>
