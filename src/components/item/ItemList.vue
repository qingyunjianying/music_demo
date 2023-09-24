<template>
  <div>
    <div class="itemList">
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
              <span style="padding-right: 1rem;">{{ item.name }}</span>
              <span
                v-for="(item1,index) in item.ar"
                :key="index"
                style="font-size:0.1rem ;color: gray;"
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
.itemList {
  /* margin-bottom: 0.5rem; */
  background: linear-gradient(to right, #d3d0d0, gray);
}
.music-ul {
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
.music-ul > .music-li {
  background-color: hsl(180, 30%, 95%, 0.8);
  opacity: 0.7;
  border: 1px solid gray;
  /* height: 2rem; */
  font-size: 1rem;
  /* font-family: "隶书"; */
  line-height: 2rem;
  padding: 0.5rem 0.5rem;
  display: flex;
  justify-content: space-between;
}
.list-left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.author {
  padding-left: 1rem;
}
</style>