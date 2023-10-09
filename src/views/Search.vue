<template>
  <div class="search_wrap">
    <div class="searchTop">
      <van-icon
        name="arrow-left"
        class="s_icon"
        size="25"
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
        >{{ item }}
        </span>
      </div>

      <van-icon
        name="delete-o"
        class="ser_del"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyWordList: [],
      keyWord: "",
    };
  },
  mounted() {
    // JSON.parse() 方法将数据转换为 JavaScript 对象
    this.keyWordList = JSON.parse(localStorage.getItem("WordList"));
    // console.log(this.keyWordList);
  },
  methods: {
    enterKey: function () {
      this.keyWordList.push(this.keyWord);
      //保存在localstorage中刷新不会清楚记录
      // JSON.stringify把原来是对象的类型转换成字符串类型
      // console.log(this.keyWordList);
      localStorage.setItem("WordList", JSON.stringify(this.keyWordList));
      this.keyWord = "";
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
  display: inline-block;
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
</style>