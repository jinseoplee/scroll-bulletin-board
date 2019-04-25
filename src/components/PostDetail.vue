<template>
  <div class="detail">
    <header class="detail__header">
      <h1 class="detail__title">Bulletin board detail</h1>
    </header>
    <article class="detail__article">
      <h2 class="article__title">{{ title }}</h2>
      <div class="article__writeInfo">
        <span class="article__email">{{ email }}</span> |
        <span class="article__date">{{ updatedDate }}</span>
      </div>
      <p class="article__contents">{{ contents }}</p>
      <div class="article__replise">
        <h2 class="replise__count">
          <span>{{ repliesCount }}</span> Replies
        </h2>
        <reply v-for="(item, index) of replies" :key="index" :replyData="item" />
      </div>
    </article>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Reply from './Reply';

export default {
  name: 'PostDetail',
  components: {
    Reply
  },
  props: {
    postNo: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      article: {},
      replies: []
    };
  },
  computed: {
    ...mapGetters(['getCategoryList']),
    categoryNo() {
      return this.category_no;
    },
    articleNo() {
      return this.article.no;
    },
    title() {
      return this.article.title;
    },
    email() {
      return this.article.email;
    },
    updatedDate() {
      return this.article.updated_at;
    },
    contents() {
      return this.article.contents;
    },
    repliesCount() {
      return this.replies.length;
    }
  },
  methods: {
    ...mapActions(['getPostDetailAPI']),
    /**
     * 초기 설정
     */
    async init() {
      try {
        const params = {
          req_no: this.postNo
        };
        const postDetailData = await this.getPostDetailAPI(params);
        this.article = postDetailData.article;
        if (postDetailData.replies) {
          this.replies = postDetailData.replies;
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    getCategoryName(key) {
      return this.getCategoryList[key];
    }
  },
  created() {
    this.init();
  }
}
</script>

<style lang="less" scoped>
.detail__header {
  box-shadow: 2px 0 3px 1px #d5d5d5;

  .detail__title {
    background-color: #b7f0b1;
    padding: 0.7em 0;
    color: #000;
    font-size: 1.2em;
    font-weight: 700;
    text-align: center;
  }
}

.detail__article {
  padding: 1em;
  margin: 15px;
  box-shadow: 2px 2px 3px 1px #d5d5d5;

  .article__title {
    font-size: 1.8em;
    font-weight: 700;
    padding-bottom: 0.5em;
    margin-bottom: 10px;
    border-bottom: 2px solid #000;
  }

  .article__writeInfo {
    margin-bottom: 10px;
    color: #8c8c8c;
  }

  .article__contents {
    line-height: 1.5;
    padding: 1.5em 0;
    margin-bottom: 10px;
  }

  .replise__count {
    font-size: 1.2em;
    font-weight: 700;
  }
}
</style>
