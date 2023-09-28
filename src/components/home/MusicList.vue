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
            tag="div"
            :to="{path:'/itemMusic',query:{id:item.id}}"
            class="route-link"
          ><van-icon
              name="play-circle-o"
              class="playerIcon"
            />
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
};
</script>

<style scoped>
.music-ban {
  height: 3rem;
  line-height: 3rem;
  font-family: "楷体";
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
  right: 1rem;
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
  display: inline-block;
  height: 2.2rem;
  overflow: hidden;
}
</style>