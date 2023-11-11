<template>
  <div class="music-li">
    <van-row class="music-ban">
      <van-col span="6">发现好歌单</van-col>
      <van-col
        span="6"
        offset="12"
      ><van-button
          plain
          round
          hairline
          size="small"
          class="mu-more"
        >查看更多
          <van-icon name="arrow" />
        </van-button></van-col>

    </van-row>
    <div class="music-list">
      <van-swipe
        :loop="false"
        :width="120"
        :show-indicators="false"
      >
        <van-swipe-item
          v-for="(item,index) in musicList"
          :key="index"
        >
          <router-link
            :to="{path:'/itemMusic',query:{id:item.id}}"
            class="route-link"
          >
            <div class="playerIcon">
              <van-icon name="play-circle-o" />
              <span>{{ changeCount(item.playCount) }}</span>
            </div>

            <img v-lazy="item.picUrl" />
          </router-link>
          <span class="name">{{ item.name }}</span>

        </van-swipe-item>

      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musicList: [],
    };
  },
  mounted() {
    this.$http.get("/personalized?limit=10").then((res) => {
      // console.log(res);
      this.musicList = res.data.result;
    });
  },
  methods: {
    changeCount: function (num) {
      if (num >= 100000000) {
        num = (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        num = (num / 10000).toFixed(1) + "万";
      }
      return num;
    },
  },
};
</script>

<style scoped>
.music-ban {
  height: 3rem;
  line-height: 3rem;
  font-family: "fangsong";
  font-size: 1rem;
  font-weight: 600;
}
.music-list {
  padding: 1rem 0.3rem;
  height: 15rem;
}
.mu-more {
  transform: translateY(-5px);
}
.van-swipe-item {
  padding-right: 0.2rem;
  position: relative;
}
.playerIcon {
  position: absolute;
  z-index: 20;
  right: 0.3rem;
  font-size: xx-small;
  color: lightcyan;
}
.van-swipe-item > .route-link > img {
  width: 100%;
  height: 7rem;
  border-radius: 0.5rem;
}
.van-swipe-item > .name {
  bottom: 0px;
  position: sticky;
  font-family: cursive;
  font-weight: 500;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* height: 2.2rem; */
  overflow: hidden;
}
</style>