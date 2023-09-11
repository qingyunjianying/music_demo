<template>
  <div class="footer-music">
    <div class="footerLeft">
      <van-image
        round
        width="3rem"
        height="3rem"
        fit="fit"
        :src="playList[playListIndex].al.picUrl"
      />
      <!-- <img :src="playList[playListIndex].al.picUrl" /> -->
      <div class="m-detail">
        <p>{{ playList[playListIndex].al.name }}</p>
        <span>说明</span>
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
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["playList", "playListIndex", "isShown"]),
  },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    console.log(this.$refs);
  },
  methods: {
    // const show=true;
    play: function () {
      if (this.$refs.audio.paused) {
        // this.show = false;
        this.$refs.audio.play();
        this.updateIsShown(false);
      } else {
        this.$refs.audio.paused = true;

        this.updateIsShown(true);
      }
      // if (this.show == false) {
      // this.show = true;
      // }
    },
    ...mapMutations(["updateIsShown"]),
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
  font-size: 2px;
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