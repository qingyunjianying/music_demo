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
        id: 150127127,
        name: "署前街少年",
        pic: 109951167805892380,
        picUrl: "https://p1.music.126.net/FCWD6ibS2JK2B3QAnXuzwQ==/109951167805892385.jpg",
        pic_str: "109951167805892385"

      },
      id: 1974443814,
      name: "我记得",
      ar: [{ name: "赵雷" }]
    }],
    playListIndex: 0,//默认下标为0
    isShown: true,//暂停按钮的显示
    detailShow: false,//歌曲详情页的显示
    lyricList: {},//歌词
    currentTime: 0,//当前时间，用于获取音乐相匹配歌词歌词
    duration: 0,//歌曲总时长
    isLogin: false,//判断是否登录
    isFooter: true,//底部组件是否显示
    unikey: '',
  },
  getters: {
  },
  mutations: {
    //改变状态按钮显示
    updateIsShown: function (state, val) {
      state.isShown = val;
    },
    // 歌单列表播放列表
    updatePlayList: function (state, val) {
      state.playList = val;
      console.log(state.playList);
    },
    //搜索列表播放列表
    pushPlayList: function (state, val) {
      state.playList.push(val);
    },
    //根据playListIndex切换歌曲
    updateListIndex: function (state, val) {
      state.playListIndex = val;
    },
    //歌曲详情页的显示
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow;
    },
    //获取当前id歌词方法
    updateLyricList: function (state, val) {

      state.lyricList = val;
      // console.log(state.lyricList);
    },
    //获取歌曲时间
    updateCurrentTime: function (state, val) {
      // console.log(state.currentTime);
      state.currentTime = val;
    },
    //更新总时长
    updateDuration: function (state, val) {
      state.duration = val;
    },
    //更改当前歌曲时间
    // changeCurrentTime: function (state, val) {
    //   // console.log(state.currentTime);
    //   state.currentTime = val;
    // },
    //更新key
    updateKey: function (state, val) {
      state.unikey = val;
    },
  },
  actions: {
    //获取歌词
    getLyric: async function (context, value) {
      axios.get("http://localhost:3000/lyric?id=" + value).then(res => {
        // console.log(res);
        context.commit("updateLyricList", res.data.lrc);
        // console.log(this.state.updateLyricList);
      })
      // let res = await getMusicLyric(value)
      // console.log(res);

    },
    // //获取登录信息
    // getLogin: async function (context, email, password, value) {

    //   axios.post(`http://localhost:3000/login?email=${email}&password=${password}`).then(res => {
    //     // console.log(res);

    //     console.log(res);
    //   })
    // },
    //获取登录信息qr
    // getLoginKey: async function (context, unikey) {
    //   axios.get(`http://localhost:3000/login/qr/key?timestamp=${Date.now()}`).then((res) => {
    //     // state.unikey = res.data.data.unikey;
    //     console.log(res.data.data.unikey);
    //     context.commit("updateKey", res.data.data.unikey)
    //   });

    // },

  },
  modules: {
  }
})
