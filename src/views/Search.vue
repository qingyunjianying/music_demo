<template>
  <div class="search_wrap">
    <div class="searchTop">
      <van-icon
        name="arrow-left"
        class="s_icon"
        size="25"
        @click="$router.go(-1)"
      />
      <input
        type="text"
        placeholder="许巍"
        v-model="keyWord"
        @keydown.enter="enterKey"
      >
    </div>
    <div class="searchHistory">
      <span class="history">历史</span>
      <div class="historyAll">
        <span
          v-for="(item,index) in keyWordList"
          :key="index"
          class="history_item"
          @click="historySearch(item,index)"
        >{{ item }}
        </span>
      </div>

      <van-icon
        name="delete-o"
        class="ser_del"
        @click="delHistory"
      />
    </div>
    <div class="itemList">
      <div
        class="music-ul"
        v-for="(item,i) in songList"
        :key="i"
      >
        <div class="music-li">
          <div
            class="list-left"
            @click="updateIndex(item)"
          >
            <span>{{ i+1 }}</span>
            <div class="author">
              <span style="padding-right: 1rem;">{{ item.name }}</span>
              <span
                v-for="(item1,index) in item.artists"
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
              v-if="item.mvid !=0"
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
export default {
  data() {
    return {
      keyWordList: [],
      keyWord: "",
      songList: [],
    };
  },
  mounted() {
    // JSON.parse() 方法将数据转换为 JavaScript 对象;同时判断如果keyWordList为空，空数组
    this.keyWordList = JSON.parse(localStorage.getItem("WordList"))
      ? JSON.parse(localStorage.getItem("WordList"))
      : [];
    // console.log(this.keyWordList);
  },
  methods: {
    enterKey: async function () {
      if (this.keyWord !== "") {
        this.keyWordList.unshift(this.keyWord);
        //数组去重
        this.keyWordList = [...new Set(this.keyWordList)];
        //保存的搜索记录长度
        if (this.keyWordList.length > 8) {
          this.keyWordList.splice(this.keyWordList.length - 1, 1);
        }
        //保存在localstorage中刷新不会清楚记录
        // JSON.stringify把原来是对象的类型转换成字符串类型
        localStorage.setItem("WordList", JSON.stringify(this.keyWordList));

        //异步请求获取搜索的信息
        let res = await this.$http.get("/search?keywords=" + this.keyWord);
        console.log(res);
        this.songList = res.data.result.songs;
        //清空在搜索框的keyword
        this.keyWord = "";
      }
    },
    delHistory: function () {
      //删除
      localStorage.removeItem("WordList");
      this.keyWordList = [];
    },
    //点击历史记录标签返回搜索结果
    historySearch: async function (item, index) {
      let res = await this.$http.get("/search?keywords=" + item);
      console.log(res);
      this.songList = res.data.result.songs;
    },
    //搜索列表的播放
    updateIndex: function (item) {
      item.al = item.album;
      item.al.picUrl = item.album.artist.img1v1Url;
      item.al.pic = item.album.artist.picId;
      this.$store.commit("pushPlayList", item);
      this.$store.commit(
        "updateListIndex",
        this.$store.state.playList.length - 1
      );
    },
  },
};
</script>

<style>
.search_wrap {
  width: 100%;
  /* height: 100%; */
  position: absolute;
}
.searchTop {
  /* margin: 0.5rem; */
  position: relative;
  width: 100%;
  height: 2rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
}
.searchTop > input {
  margin-left: 1rem;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 80%;
  padding: 2px;
}
.searchHistory {
  position: absolute;
  width: 80%;
  padding: 1rem 1.5rem;
}
.searchHistory > .history {
  font-weight: bold;
  padding-right: 1rem;
  float: left;
}
.searchHistory > .historyAll {
  float: left;
}
.searchHistory > .historyAll > .history_item {
  padding: 2px;
  background: #ccc;
  margin: 0.2rem 0.3rem;
  border-radius: 0.5rem;
  display: inline-block;
}
.searchHistory > .ser_del {
  position: absolute;
  right: 0;
}
/* 列表 */
.itemList {
  margin-top: 8rem;
  /* background: linear-gradient(to right, #d3d0d0, gray); */
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