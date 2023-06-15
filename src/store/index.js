import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 歌单列表
    playList: [{
      al: {
        id: 78720135,
        name: "我的名字",
        pic: 109951166267072670,
        picUrl: "https://p2.music.126.net/Ppzb5LV4l9R-yki1BQQB0A==/109951166267072680.jpg",
        pic_str: "109951166267072680"

      },
      id: 1360807180
    }],
    playListIndex: 0,//默认下标为0
    isShown: true,//暂停按钮的显示
  },
  getters: {
  },
  mutations: {
    //改变状态
    updateIsShown: function (state, val) {
      state.isShown = val;

    }
  },
  actions: {
  },
  modules: {
  }
})
