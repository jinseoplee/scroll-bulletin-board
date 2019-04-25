<template>
  <div class="ads">
    <p class="ads__header">Sponsored</p>
    <img :src="img" alt="">
    <div class="ads__body">
      <h1 class="ads__title">{{ title }}</h1>
      <p class="ads__contents">{{ contents }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdsItem',
  props: {
    adsData: {
      type: Object,
      require: true
    }
  },
  computed: {
    img() {
      return 'https://comento.cafe24.com/public/images/'.concat(this.adsData.img);
    },
    title() {
      return this.adsData.title;
    },
    contents() {
      return this.adsData.contents;
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/mixin';

.ads {
  box-shadow: 2px 2px 3px 1px #d5d5d5;
  padding: 0 0.5em 0.5em;
  .clearfix;

  .ads__header {
    padding: 0.8em 0;
    font-weight: 700;
  }

  img {
    width: 32vw;
    float: left;
  }

  .ads__body {
    text-align: justify;
    padding: 0.5em;
    overflow: hidden;
    
    .ads__title {
      font-weight: 700;
      margin-bottom: 10px;
    }

    .ads__contents {
      .textLimitMulti;
    }
  }
}

@media (max-width: 480px) {
  .ads {
    img {
      float: none;
      width: 100%;
    }
  }
}
</style>
