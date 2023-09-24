import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { getMusicLyric } from "../request/api"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 歌单列表播放列表
    playList: [{
      al: {
        id: 131405806,
        name: "致你",
        pic: 109951166254691360,
        picUrl: "https://p2.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
        pic_str: "109951166254691365"

      },
      id: 1867217766,
      name: "致你",
      ar: [{ name: "yihuik苡慧" }]
    }],
    playListIndex: 0,//默认下标为0
    isShown: true,//暂停按钮的显示
    detailShow: false,//歌曲详情页的显示
  },
  getters: {
  },
  mutations: {
    //改变状态
    updateIsShown: function (state, val) {
      state.isShown = val;
    },
    updatePlayList: function (state, val) {
      state.playList = val;
      console.log(state.playList);
    },
    updateListIndex: function (state, val) {
      state.playListIndex = val;
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow;
    }
  },
  actions: {
    getLyric: async function (context, value) {
      axios.get("http://localhost:3000/lyric?id=" + value).then(res => {
        console.log(res);
      })
      // let res = await getMusicLyric(value)
      // console.log(res);
      // context.commit("updateLyricList", res.data.lrc)
    },
  },
  modules: {
  }
})
