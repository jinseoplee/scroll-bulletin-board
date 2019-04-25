<template>
  <article class="post" @click="goDetail(postNo)">
    <header class="post__header">
      <p class="post__category">{{ getCategoryName(categoryNo) }}</p>
      <p class="post__no">{{ postNo }}</p>
    </header>
    <div class="post__writeInfo">
      <span class="post__email">{{ email }}</span> |
      <span class="post__date">{{ updatedDate }}</span>
    </div>
    <div class="post__body">
      <p class="post__title">{{ title }}</p>
      <p class="post__contents">{{ contents }}</p>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "ListItem",
  props: {
    postData: {
      type: Object,
      require: true
    }
  },
  computed: {
    ...mapGetters(['getCategoryList']),
    categoryNo() {
      return this.postData.category_no;
    },
    postNo() {
      return this.postData.no;
    },
    email() {
      return this.postData.email;
    },
    updatedDate() {
      return this.postData.updated_at;
    },
    title() {
      return this.postData.title;
    },
    contents() {
      return this.postData.contents;
    }
  },
  methods: {
    getCategoryName(key) {
      return this.getCategoryList[key];
    },
    goDetail(no) {
      this.$router.push({ name: 'PostDetail', params: { postNo: this.postNo } });
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/mixin';

.post {
  box-shadow: 2px 2px 3px 1px #d5d5d5;

  &:last-child {
    margin-bottom: 0;
  }

  @bothSidePadding: 0.8em;

  .post__header {
    padding: 0.5em @bothSidePadding;
    background-color: #f8f9fa;
    box-shadow: 0 0 4px 0 #d5d5d5;
    margin-bottom: 10px;
    .clearfix;
    
    .post__category {
      float: left;
    }
    .post__no {
      float: right;
    }
  }

  .post__writeInfo {
    padding: 0.3em @bothSidePadding;
    margin-bottom: 10px;
    color: #8c8c8c;
  }

  .post__body {
    padding: 0.5em @bothSidePadding 1.2em;

    .post__title {
      margin-bottom: 10px;
      font-weight: 700;
      font-size: 1.1em;
      .textLimit;
    }

    .post__contents {
      .textLimit;
      line-height: 1.5;
    }
  }
}
</style>
