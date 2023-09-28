<template>
  <div class="home">
    <top-nav></top-nav>
    <swiper-top></swiper-top>
    <middle-nav></middle-nav>
    <music-list></music-list>
  </div>
</template>

<script>
// @ is an alias to /src
// import TopNav from "@/components/TopNav.vue";
import SwiperTop from "@/components/home/SwiperTop.vue";
import MiddleNav from "@/components/home/MiddleNav.vue";
import MusicList from "@/components/home/MusicList.vue";
import TopNav from "@/components/home/TopNav.vue";
export default {
  name: "HomeView",
  components: {
    // TopNav,
    SwiperTop,
    MiddleNav,
    MusicList,
    TopNav,
  },
};
</script>
