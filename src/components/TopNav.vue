<template>
  <div class="hello">
    <div>
      <van-nav-bar
        title="这是标题"
        left-text="我的"
        left-arrow
      >
        <template #right>
          <van-icon
            name="search"
            size="18"
          />
        </template>
      </van-nav-bar>
      <van-tabbar v-model="active">
        <van-tabbar-item
          name="home"
          icon="home-o"
        >标签</van-tabbar-item>
        <van-tabbar-item
          name="search"
          icon="search"
        >标签</van-tabbar-item>
        <van-tabbar-item
          name="friends"
          icon="friends-o"
        >标签</van-tabbar-item>
        <van-tabbar-item
          name="setting"
          icon="setting-o"
          @click="car"
        >购物车</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    car() {
      this.$router.push({ path: "/car" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
