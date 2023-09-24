<template>
  <div id="app">
    <nav>
      <van-icon
        name="apps-o"
        size="25"
      />
      <a href="#">我的</a>
      <router-link to="/">发现</router-link>
      <router-link to="/about">云村</router-link>
      <a href="#">视频</a>
      <van-icon
        name="search"
        size="25"
      />
    </nav>
    <router-view />
    <footer-music-vue></footer-music-vue>
  </div>
</template>

<script>
import FooterMusicVue from "./components/MusicPlayer/FooterMusic.vue";

export default {
  name: "app",
  components: {
    FooterMusicVue,
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
