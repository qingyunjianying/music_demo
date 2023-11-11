<template>
  <div class="item-top">
    <van-nav-bar
      title="歌单详情"
      left-text="返回"
      left-arrow
      @click-left="onBack"
    >
    </van-nav-bar>
    <div class="music-container">

      <div class="music-title">
        <van-image
          width="6rem"
          height="6rem"
          fit="cover"
          :src="playList.coverImgUrl"
        />
        <div class="pl-right">
          <div class="pl-name">{{ playList.name }}</div>
          <span class="pl-span">{{ playList.description }}</span>
        </div>

      </div>
    </div>
    <div class="music-bo">
      <div class="li-icon">
        <van-icon
          name="chat-o"
          size="2rem"
        />
        <div class="li-com">{{ playList.commentCount }}</div>
      </div>
      <div class="li-icon">
        <van-icon
          name="share-o"
          size="2rem"
        />
        <div class="li-com">{{ playList.shareCount }}</div>
      </div>
      <div class="li-icon">
        <van-icon
          name="upgrade"
          style="transform: rotate(180deg);"
          size="2rem"
        />
        <div class="li-com">下载</div>
      </div>
      <div class="li-icon">
        <van-icon
          name="certificate"
          size="2rem"
        />
        <div class="li-com">多选</div>
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
    console.log(this.playList);
  },
};
</script>

<style >
.item-top {
  display: flex;
  flex-direction: column;
}
.van-nav-bar {
  background: none;
  z-index: 0;
  border: none;
}
.van-nav-bar__left {
  font-weight: 200;
}
.van-nav-bar .van-icon,
.van-nav-bar__text {
  color: #000;
}
.van-hairline--bottom::after {
  border: none;
}
.pl-right {
  margin: 0.5rem;
}
.pl-name {
  font-family: fangsong;
  font-size: 1rem;
  font-weight: 600;
}
.pl-span {
  margin-top: 0.5rem;
  text-indent: 24px;
  /* height: 3.4rem; */
  font-size: 0.7rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  /* display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden; */
}

.music-container {
  position: relative;
  overflow: hidden;
  margin: 0.5rem;
}
.music-title {
  display: grid;
  align-items: center;
  grid-template-columns: 30% 70%;
  padding: 0.5rem 1rem;
}
.van-image__error,
.van-image__img,
.van-image__loading {
  border-radius: 1.5rem;
}
.music-bo {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0.5rem 1rem;
}
.li-icon > .li-com {
  font-size: 0.7rem;
}
</style>