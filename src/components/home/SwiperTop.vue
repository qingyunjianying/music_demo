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
        <img
          @load="loadingImg"
          :src="image.pic"
          ref="img"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        // "https://img01.yzcdn.cn/vant/apple-1.jpg",
        // "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
  methods: {
    loadingImg() {
      this.imgSize = this.$refs["img"][0].offsetHeight;
    },
  },
  mounted() {
    this.$http.get("/banner?type=2").then((res) => {
      // console.log(res);
      this.images = res.data.banners;
    });
  },
};
</script>

<style scoped>
.van-swiper {
  width: 100%;
  /* height: 1.5rem; */
}
.van-swiper > .van-swipe__track {
  width: 100%;
  height: 9rem;
}
.van-swipe-item {
  padding: 0 0;
}
.van-swipe-item > img {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}
</style>