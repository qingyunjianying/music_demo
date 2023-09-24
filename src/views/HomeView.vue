<template>
  <div class="home">
    <!-- <top-nav></top-nav>  -->
    <swiper-top></swiper-top>
    <middle-nav></middle-nav>
    <music-list></music-list>
  </div>
</template>

<script>
// @ is an alias to /src
// import TopNav from "@/components/TopNav.vue";
import SwiperTop from "@/components/SwiperTop.vue";
import MiddleNav from "@/components/MiddleNav.vue";
import MusicList from "@/components/MusicList.vue";

export default {
  name: "HomeView",
  components: {
    // TopNav,
    SwiperTop,
    MiddleNav,
    MusicList,
  },
};
</script>
