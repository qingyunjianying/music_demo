<template>
  <div id="app">
    <index-vue></index-vue>
  </div>
</template>

<script>
import IndexVue from "./views/Index.vue";

export default {
  name: "app",
  components: {
    IndexVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: linear-gradient(45deg, #f69d3c, #ebf8e1, #3f87a6);
}
nav {
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-around;
}

nav a {
  padding: 0 1rem;
  font-weight: bold;
  color: hsl(210, 3%, 52%);
}

nav a.router-link-exact-active {
  color: hsl(180, 1%, 17%);
}
</style>
