<template>
  <div
    class="qrlogin"
    id="qrlogin"
  >
    {{ unikey }}

    <img :src="qrimg" />
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "qrlogin",
  data() {
    return {
      unikey: "",
      qrimg: "",
      qrurl: "",
      qrCheckData: {}, //状态
      message: "",
    };
  },
  created() {},
  mounted() {
    this.getKey();
  },
  methods: {
    //key
    getKey() {
      let keyData = this.$http
        .get(`/login/qr/key?timestamp=${Date.now()}`)
        .then((res) => {
          this.unikey = res.data.data.unikey;
          // console.log(res);
          this.loginQr(this.unikey);
        });
    },
    //获取二维码
    loginQr: function () {
      let qrData = this.$http
        .get(
          `/login/qr/create?key=${
            this.unikey
          }&qrimg=true&timestamp=${Date.now()}`
        )
        .then((res) => {
          // console.log(res);
          this.qrimg = res.data.data.qrimg;
          this.qrCheck();
        });
    },
    //二维码状态
    qrCheck: function () {
      let qrCheck = this.$http
        .get(`/login/qr/check?key=${this.unikey}&timestamp=${Date.now()}`)
        .then((res) => {
          console.log(res);
          this.qrCheckData = res.data;
          this.message = res.data.message;

          //
        });
    },
  },
  watch: {},
};
</script>

<style>
</style>