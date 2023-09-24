<template>
  <div class="middle">
    <van-row class="mid-nav">
      <van-col span="6"><van-icon
          name="like"
          size="20"
          color="#f07675"
        /></van-col>
      <van-col span="6"><van-icon
          name="fire"
          size="20"
          color="#913e22"
        /></van-col>
      <van-col span="6"><van-icon
          name="point-gift"
          size="20"
          color="#7dc2d4"
        /></van-col>
      <van-col span="6"><van-icon
          name="point-gift"
          size="20"
          color="#918724"
        /></van-col>
    </van-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.middle {
  height: 4rem;
  /* background-color: cadetblue; */
}
.mid-nav {
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
}
</style>