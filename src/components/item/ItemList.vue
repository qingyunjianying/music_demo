<template>
  <div class="item-list">
    <div class="itemList">
      <div class="music-top-list">
        <div class="top-l">
          <van-icon name="play-circle-o" />
          <span class="play-all">播放全部</span>
          <span class="play-count">(共10首)</span>
        </div>
        <div class="top-r">
          <van-button
            round
            size="small"
            type="info"
          >+收藏&nbsp;{{ subscribedCount }}</van-button>
        </div>
      </div>
      <div
        class="music-ul"
        v-for="(item,i) in itemList"
        :key="i"
      >
        <div
          class="music-li"
          @click="musicPlay(i)"
        >
          <div class="list-left">
            <span>{{ i+1 }}</span>
            <div class="author">
              <span class="author-pl">{{ item.name }}</span>
              <span
                v-for="(item1,index) in item.ar"
                :key="index"
                class="author-na"
              >
                {{ item1.name }}
              </span>
            </div>

          </div>
          <div>
            <van-icon
              name="video-o"
              size="1.5rem"
              v-if="item.mv !=0"
            />
            <van-icon
              name="more"
              size="1.5rem"
            />
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "itemList",
  props: {
    itemList: {},
    subscribedCount: "",
  },
  mounted() {
    // this.details = this.itemList.ar;
    // console.log(this.itemList.ar);
  },
  data() {
    return {
      // details: [],
    };
  },
  methods: {
    musicPlay: function (i) {
      this.updatePlayList(this.itemList);
      this.updateListIndex(i);
    },
    ...mapMutations(["updatePlayList", "updateListIndex"]),
  },
};
</script>

<style scoped>
.item-list {
  position: relative;
}
.itemList {
  background-color: hsl(180, 30%, 95%, 0.8);
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}
.music-top-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.4rem;
}
.top-l > .play-all {
  padding-left: 1rem;
}
.top-l > .play-count {
  color: #5c717c;
  font-size: 0.8rem;
}
.music-ul {
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
.music-ul > .music-li {
  opacity: 0.7;
  border: 1px solid gray;
  font-size: 1rem;
  line-height: 2rem;
  padding: 0.5rem 0.5rem;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  align-items: center;
}
.list-left {
  display: flex;
  justify-content: center;
}
.author {
  padding-left: 1rem;
  max-width: 17rem;
  overflow: hidden;
  /* text-overflow: ellipsis; */
}
.author > .author-pl {
  display: inline-block;
  max-width: 12rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.author > .author-na {
  color: gray;
  font-size: 0.7rem;
  padding-left: 0.5rem;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>