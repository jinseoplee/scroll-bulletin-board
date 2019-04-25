<template>
  <div id="app" class="root">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './assets/styles/reset.css';
body {
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
