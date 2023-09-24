<template>
  <div class="big_music">
    <img
      :src="musicPlay.al.picUrl"
      alt=""
      class="bgimg"
    >
    <div class="musicDetail">

      <div class="musicDetail_L">
        <van-icon
          name="arrow-left"
          size="30"
          @click="updateDetailShow"
        />
        <div class="detailName">
          <v2-marquee
            :tempo="10"
            mode="horizontal"
          >
            <div class="margin-right-30 padding-10">
              {{musicPlay.al.name}}
            </div>
          </v2-marquee>
          <!-- <p>{{ musicPlay.al.name }}</p> -->
          <span
            v-for="item in musicPlay.ar"
            :key="item.id"
          >{{item.name }}<van-icon
              name="arrow"
              size="10"
            /></span>
        </div>
      </div>
      <div class="musicDetail_R">
        <van-icon
          name="share-o"
          size="30"
        />
      </div>
    </div>
    <div class="musicDe_con">
      <div class="m_content">
        <img
          src="../../assets/needle-ab.png"
          class="needle"
          :class="{needle_active: !isShown}"
        >
        <img
          src="../../assets/cd.png"
          class="cd"
        >
        <img
          :src="musicPlay.al.picUrl"
          class="ar"
          :class="{ar_active: !isShown, ar_pauesd: isShown}"
        >
      </div>
    </div>
    <div class="music-Bo">
      <div class="bo-t">
        <van-icon
          name="like-o"
          size="25"
        />
        <van-icon
          name="down"
          size="25"
        />
        <van-icon
          name="music"
          size="25"
        />
        <van-icon
          name="comment-o"
          size="25"
        />
        <van-icon
          name="friends-o"
          size="25"
        />
      </div>
      <div class="bo-main"></div>
      <div class="bo-play">
        <van-icon
          name="revoke"
          size="30"
        />
        <van-icon
          name="arrow-left"
          size="30"
        />
        <van-icon
          name="play-circle-o"
          size="40"
          v-if="isShown"
          @click="play"
        />
        <van-icon
          name="pause-circle-o"
          size="40"
          v-else
          @click="play"
        />
        <van-icon
          name="arrow"
          size="30"
        />
        <van-icon
          name="ascending"
          size="30"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    musicPlay: {},
    isShown: {},
    play: {},
  },
  mounted() {
    console.log(this.musicPlay);
  },
  data() {
    return {};
  },
  created() {
    // this.$http.get("/lyric?id=" + this.musicPlay.id).then((res) => {
    //   console.log(res);
    // });
  },
  methods: {
    ...mapMutations(["updateDetailShow", "updateIsShown"]),
    // backHome() {
    //   this.updateDetailShow();
    // },
  },
};
</script>

<style>
.big_music {
  display: flex;
}
.bgimg {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(40px);
}
.musicDetail {
  position: absolute;
  right: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background: hsla(160, 13%, 86%, 0.4);
  box-shadow: 0 0 1rem hsla(160, 13%, 86%, 0.4);
}
.detailName {
  display: inline-block;
}
.marquee-content[data-v-d8859ec0] {
  background: none;
}
.detailName > p {
  margin: 0;
  font-weight: 500;
  font-size: 1rem;
}
.detailName > span {
  font-size: 0.5rem;
  font-weight: 100;
}
.musicDe_con {
  position: relative;
  width: 100%;
}
.m_content {
  width: 100%;
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 30%;
}
.m_content > .needle {
  width: 5rem;
  position: absolute;
  z-index: 25;
  transform-origin: 0 0;
  transform: rotate(-13deg);
  transition: all 2s;
}
.m_content > .needle_active {
  width: 5rem;
  position: absolute;
  z-index: 25;
  transform-origin: 0 0;
  transform: rotate(0);
  transition: all 2s;
}
.m_content > .cd {
  position: relative;
  top: 35%;
}
.m_content > .ar {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  position: absolute;
  top: 47%;
  animation: rotate_ar 10s linear infinite;
}
/* infinite无限循环 */
/* animation-play-state 动画的启动与暂停*/
.m_content > .ar_active {
  animation-play-state: running;
}
.m_content > .ar_pauesd {
  animation-play-state: paused;
}
@keyframes rotate_ar {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
.music-Bo {
  position: absolute;
  padding: 1rem;
  right: 0;
  bottom: 0;
  left: 0;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.music-Bo > .bo-t {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.music-Bo > .bo-play {
  position: relative;

  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>