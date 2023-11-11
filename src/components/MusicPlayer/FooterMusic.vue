<template>
  <div class="footer-music">
    <div
      class="footerLeft"
      @click="updateDetailShow"
    >
      <van-image
        round
        width="3rem"
        height="3rem"
        fit="fit"
        :src="playList[playListIndex].al.picUrl"
      />
      <!-- <img :src="playList[playListIndex].al.picUrl" /> -->
      <div class="m-detail">
        <p>{{ playList[playListIndex].name }}</p>
        <!-- <span>{{playList[playListIndex].ar[0].name}}</span> -->
        <span>滑动切换上下首哦</span>
      </div>
    </div>
    <div class="footerRight">
      <van-icon
        name="play-circle"
        size="2rem"
        @click="play"
        v-if="isShown"
      />
      <van-icon
        name="pause-circle"
        size="2rem"
        @click="play"
        v-else
      />
      <van-icon
        name="more"
        size="2rem"
      />
    </div>
    <audio
      ref="audio"
      :src=" `https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
    ></audio>
    <van-popup
      v-model="detailShow"
      position="right"
      :style="{ height: '100%',width:'100%' }"
    >
      <music-play-detail
        :musicPlay="playList[playListIndex]"
        :play="play"
        :isShown="isShown"
        :addDuration="addDuration"
      ></music-play-detail>
    </van-popup>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import MusicPlayDetail from "./MusicPlayDetail.vue";
export default {
  components: { MusicPlayDetail },
  computed: {
    ...mapState([
      "playList",
      "playListIndex",
      "isShown",
      "detailShow",
      "duration",
    ]),
    // Vuex中是单项流，v-model是vue中的双向绑定，但是在computed中只通过get获取参数值，没有set无法改变参数值
    detailShow: {
      get() {
        return this.$store.state.detailShow;
      },
      set() {
        this.$store.state.detailShow = this.detailShow;
      },
    },
  },
  data() {
    return {
      show: true,
      interVal: 0, //音乐时间
    };
  },
  created() {
    //获取歌词
    // this.$http
    //   .get("/lyric?id=" + this.playList[this.playListIndex].id)
    //   .then((res) => {
    //     console.log(res);
    //   });
  },
  mounted() {
    console.log(this.$refs);
    this.$store.dispatch("getLyric", this.playList[this.playListIndex].id);
    // this.updateTime();
  },
  updated() {
    this.$store.dispatch("getLyric", this.playList[this.playListIndex].id);
    this.addDuration();
  },
  methods: {
    // const show=true;
    play() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateIsShown(false);
        this.updateTime(); //播放就调用音乐更新函数进行传值
      } else {
        console.log(this.$refs);
        this.$refs.audio.pause();
        this.updateIsShown(true);
        clearInterval(this.interVal);
        // clearInterval(this.interVal); //暂停清除定时器
      }
    },

    //更新音乐时间
    updateTime: function () {
      this.interVal = setInterval(() => {
        this.updateCurrentTime(this.$refs.audio.currentTime);
      }, 1000); //每一秒调用一次
    },
    //添加总时长
    addDuration: function () {
      this.updateDuration(this.$refs.audio.duration);
    },
    ...mapMutations([
      "updateIsShown",
      "updateDetailShow",
      "updateCurrentTime",
      "updateDuration",
    ]),
  },
  watch: {
    playListIndex: function () {
      //监听如果下标发生了改变，就自动播放音乐
      this.$refs.audio.autoplay = true;

      if (this.$refs.audio.paused) {
        //如果是暂停状态，改变图标
        this.updateIsShown(false);
      }
    },
    //监听播放列表，实现点击音乐自动播放
    playList: function () {
      if (this.isShow) {
        this.$refs.audio.autoplay = true;
        this.updateIsShow(false);
      }
    },
  },
};
</script>

<style>
.footer-music {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  border-top: 1px solid gray;
  background-color: #fff;
}
.footerLeft {
  display: flex;
  position: relative;
  align-items: center;
  padding: 2rem 1rem;
}
.m-detail {
  margin-left: 1.5rem;
  /* box-sizing: border-box; */
}
.m-detail > p {
  font-size: 1rem;
  margin: 0 0;
}
.m-detail > span {
  position: relative;
  font-size: 0.5rem;
  color: gray;
  /* margin: 0 auto; */
}
.footerRight {
  display: flex;
  align-items: center;
  /* padding-right: 1rem; */
  /* justify-content: center; */
}
.footerRight > i {
  padding-right: 0.5rem;
}
</style>