<template>
  <nav>
    <van-icon
      name="apps-o"
      size="25"
    />
    <a href="#">我的</a>
    <router-link to="/">发现</router-link>
    <router-link to="#">云村</router-link>
    <a href="#">视频</a>
    <van-icon
      name="search"
      size="25"
      @click="$router.push('/search')"
    />
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>