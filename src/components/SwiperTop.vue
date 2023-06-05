<template>
  <div class="swiper">
    <van-swipe
      :autoplay="3000"
      lazy-render
    >
      <van-swipe-item
        v-for="(image, index) in images"
        :key="index"
      >
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
};
</script>

<style>
.van-swiper {
  width: 100%;
  height: 3rem;
}
.van-swipe-item {
  padding: 0 0.2rem;
}
.van-swipe-item > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1rem;
}
</style>