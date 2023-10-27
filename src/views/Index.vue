<template>
  <div class="IndexVue">
    <router-view></router-view>
    <footer-music-vue v-show="$store.state.isFooter"></footer-music-vue>
  </div>
</template>

<script>
import FooterMusicVue from "@/components/MusicPlayer/FooterMusic.vue";
import HomeView from "./HomeView.vue";
export default {
  name: "IndexVue",
  components: {
    FooterMusicVue,
    HomeView,
  },
};
</script>

<style>
</style>