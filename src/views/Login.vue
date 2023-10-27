<template>
  <div class="Login">
    <van-icon
      name="arrow-left"
      class="s_icon"
      size="25"
      @click="$router.go(-1)"
    />
    <h1>Login</h1>
    <div class="main-log">
      <form class="loginContent">

        <input
          type="text"
          name="email"
          class="email"
          v-model="email"
          placeholder="请输入邮箱号码"
        />

        <input
          type="password"
          name="password"
          class="password"
          v-model="password"
          placeholder="请输入密码"
          autocomplete="off"
        />
        <button
          class="btn"
          @click="Login"
        >登录</button>

      </form>
      <button
        class="confirm-btn"
        @click="$router.push('./qrlogin')"
      >获取二维码</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    Login: function () {
      this.$store.dispatch("getLogin", {
        email: this.email,
        password: this.password,
      });
      console.log(res);
    },
  },
};
</script>

<style scoped>
.Login {
  display: flex;
  flex-direction: column;
}
.s_icon {
  position: absolute;
  margin: 1.6rem 1rem;
}
.main-log {
  margin: 1rem;
  height: 35rem;
}
.loginContent {
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5rem;
}
.loginContent > .email,
.password,
.btn {
  border: none;
  height: 2rem;
  border-radius: 0.5rem;
}
</style>