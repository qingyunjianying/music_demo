<template>
  <div>
    <van-nav-bar
      title="歌单详情"
      left-text="返回"
      left-arrow
      @click-left="onBack"
    >
    </van-nav-bar>
    <div class="music-container">
      <img />
      <div class="music-title">
        <van-image
          round
          width="5rem"
          height="5rem"
          fit="cover"
          :src="playList.coverImgUrl"
        />
        <div>
          <div class="pl-name">{{ playList.name }}</div>
          <span class="pl-span">{{ playList.description }}</span>
        </div>

      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "ItemTop",
  props: {
    playList: Object,
  },
  methods: {
    onBack() {
      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    // console.log(this.playList);
  },
};
</script>

<style>
.van-nav-bar {
  background: linear-gradient(70deg, #eee3bb, #f5a144);
  z-index: 0;
}
.pl-name {
  font-family: cursive;
  font-size: 1rem;
  font-weight: 600;
}
.pl-span {
  padding: 0.5rem 0;
  text-indent: 24px;
  height: 3.5rem;
  font-size: 0.5rem;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
}

.music-container {
  position: relative;
  height: 9rem;
  overflow: hidden;
  background: linear-gradient(to bottom right, grey, hsl(0, 5%, 85%, 5%));
}
.music-title {
  display: grid;
  align-items: center;
  grid-template-columns: 30% 70%;
  padding: 0rem 1rem;
}
</style>