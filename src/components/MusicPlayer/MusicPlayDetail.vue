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
          @click="backHome"
        />
        <div class="detailName">
          <v2-marquee
            :tempo="10"
            mode="horizontal"
          >
            <div style="width: 10rem; white-space:nowrap;">
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
    <div
      class="musicDe_con"
      v-show="!isLyricShow"
    >
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
          @click="isLyricShow=true"
          :class="{ar_active: !isShown, ar_pauesd: isShown}"
        >
      </div>
    </div>
    <div
      class="music_lyric"
      v-show="isLyricShow"
      ref="musicLyric"
    >
      <!-- {{ lyric }} -->
      <p
        v-for="(item,index) in lyric"
        :key="index"
        :class="{active:currentTime*1000>=item.time && currentTime*1000<item.pre}"
      >{{ item.lrc }}</p>
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
      <div class="bo-main">
        <input
          type="range"
          class="range"
          min="0"
          :max="duration"
          v-model="currentTime"
        >
      </div>
      <div class="bo-play">
        <van-icon
          name="revoke"
          size="30"
        />
        <van-icon
          name="arrow-left"
          size="30"
          @click="goChangeMusic(-1)"
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
          @click="goChangeMusic(1)"
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
import { mapMutations, mapState } from "vuex";
export default {
  props: {
    musicPlay: {},
    isShown: {},
    play: {},
    addDuration: {},
  },
  data() {
    return {
      isLyricShow: false,
    };
  },
  methods: {
    //歌曲详情页的返回
    backHome() {
      //歌词展示为F,调用返回方法updateDetailShow
      this.isLyricShow = false;
      this.updateDetailShow();
    },
    //歌曲上下首的切换
    goChangeMusic: function (num) {
      // console.log(this.playListIndex);
      // console.log();
      let index = this.playListIndex + num;
      if (index < 0) {
        index = this.playList.length - 1;
      } else if (index == this.playList.length) {
        index = 0;
      }
      // console.log(index);
      this.updateListIndex(index);
    },
    ...mapMutations(["updateDetailShow", "updateIsShown", "updateListIndex"]),
  },
  computed: {
    ...mapState([
      "lyricList",
      "currentTime",
      "playListIndex",
      "playList",
      "duration",
    ]),
    lyric: function () {
      let arr;
      //对拿到的数据歌词进行处理，以换行符分割,得到新数组，再map新数组，slice切割时间与歌词
      if (this.lyricList.lyric) {
        arr = this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
          // [00:56.180]也许你不会懂 从你说爱我以后
          // [01:03.00]我的天空 星星都亮了
          //slice包头不包尾
          let min = item.slice(1, 3);
          let sec = item.slice(4, 6);
          let mill = item.slice(7, 10);
          //audio获取的属性 currentTime:3.65823当前播放时间；durat1on:271.699592总时间；以毫秒表示所以需转化为毫秒的time
          let time =
            parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          let lrc = item.slice(11, item.length);
          //毫秒的转换]
          // 00 01 0 作曲：金大洲
          // 00 02 NaN 雨的声音
          if (isNaN(Number(mill))) {
            mill = item.slice(7, 9);
            lrc = item.slice(10, item.length);
            let time =
              parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          }
          // console.log(min, sec, Number(mill), lrc);
          return { min, sec, mill, lrc, time };
        });
        //获取当前time的下一个time，新增属性pre,用于歌词突出显示
        arr.forEach((item, i) => {
          //如果是最后一句，下一首；或者time:NaN;active样式突出显示
          if (i === arr.length - 1 || isNaN(arr[i + 1].time)) {
            item.pre = 1000000;
          } else {
            item.pre = arr[i + 1].time;
          }
        });
      }
      // console.log(arr);
      return arr;
    },
    currentTime: {
      get() {
        return this.$store.state.currentTime;
      },
      set() {
        this.$store.state.currentTime = this.currentTime;
      },
    },
  },
  mounted() {
    console.log(this.musicPlay);
    // console.log(this.lyricList.lyric);
    this.addDuration();
  },

  created() {},

  //歌词滚动效果，监听active距离顶部距离
  watch: {
    currentTime: function (newVal) {
      let p = document.querySelector("p.active");
      // [p]不加【】看不到offsetTop:值
      // console.log([p]);
      //最外层if防止获取不到p报错
      if (p) {
        if (p.offsetTop > 182) {
          this.$refs.musicLyric.scrollTop = p.offsetTop - 182;
        }
      }
      //如果进度条到达最后自动播放下一首
      if (newVal === this.duration) {
        if (this.playListIndex === this.playList.length - 1) {
          this.updateListIndex(0);
          this.play();
        } else {
          this.updateListIndex(this.playListIndex + 1);
        }
      }
    },
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
  filter: blur(50px);
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
  color: azure;
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
  margin-top: 20%;
  width: 100%;
}
.m_content {
  width: 100%;
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 10%;
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
.music_lyric {
  width: 100%;
  position: absolute;
  height: 65%;
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
}
.music_lyric > p {
  margin-top: 0.5rem;
  color: azure;
}
.music_lyric > .active {
  font-size: 1.5rem;
  color: gold;
}
.music-Bo {
  color: azure;
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
.music-Bo > .bo-main {
}
.music-Bo > .bo-main > .range {
  width: 100%;
  height: 2px;
}
.music-Bo > .bo-play {
  position: relative;

  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>