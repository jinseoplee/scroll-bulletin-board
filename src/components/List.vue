<template>
  <div class="board">
    <header class="board__header">
      <h1 class="board__title">Scroll bulletin board</h1>
      <nav class="board__nav">
        <button type="button" class="board__filter" @click="clickFilter">필터</button>
        <div class="board__sortGroup">
          <input type="radio" id="sortAsc" name="sort" value="asc" v-model="sortType" checked>
          <label for="sortAsc" class="board__sortAsc">오름차순</label>
          <input type="radio" id="sortDesc" name="sort" value="desc" v-model="sortType">
          <label for="sortDesc" class="board__sortDesc">내림차순</label>
        </div>
      </nav>
    </header>
    <div class="board__body">
      <div class="border__item" v-for="(item, index) of getLoadedPost" :key="index">
        <list-item v-if="item.itemType === 0" :postData="item"/>
        <ads-item v-else-if="item.itemType === 1" :adsData="item"/>
      </div>
    </div>
    <filter-modal class="filterModal" :isModalShow.sync="isModalShow">
      <h1 class="filterModal__title">필터</h1>
      <div class="filterModal__body">
        <label v-for="(item, index) of getCategory" :key="index">
          <input type="checkbox" :value="index" v-model="selectedFilter"> {{ item }}
        </label>
      </div>
    </filter-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { LIST } from '../store/mutations.type.js';
import Modal from './Modal';
import ListItem from './ListItem';
import AdsItem from './AdsItem';

export default {
  name: 'List',
  components: {
    'filter-modal': Modal,
    ListItem,
    AdsItem
  },
  data() {
    return {
      postList: [],
      sortType: 'asc',
      selectedFilter: [],
      isModalShow: false,
      postPage: 1,
      bottom: false
    };
  },
  computed: {
    ...mapGetters(['getCategoryList', 'getLoadedPostList']),
    getCategory() {
      return this.getCategoryList;
    },
    getLoadedPost() {
      return this.getLoadedPostList;
    }
  },
  watch: {
    sortType() {
      this.$store.commit(LIST.POST_LIST, []);
      this.getPostList();
    },
    selectedFilter() {
      this.$store.commit(LIST.POST_LIST, []);
      this.getPostList();
    },
    bottom() {
      this.postPage += 1;
      this.getPostList();
    }
  },
  methods: {
    ...mapActions(['getPostListAPI', 'getCategoryAPI']),
    /**
     * 게시글 & 광고 조회
     */
    async getPostList() {
      try {
        const params = {
          post: {
            page: this.postPage,
            ord: this.sortType,
            category: this.selectedFilter
          },
          ads: {
            page: this.postPage,
            limit: 3
          }
        };
        await this.getPostListAPI(params);
      } catch (error) {
        throw new Error(error);
      }
    },
    /**
     * 초기 설정
     */
    async init() {
      try {
        const category = await this.getCategoryAPI();
        this.selectedFilter = category.list.reduce((array, item) => {
          array.push(item.no);
          return array;
        }, []);
      } catch (error) {
        throw new Error(error);
      }
    },
    clickFilter() {
      this.isModalShow = !this.isModalShow;
    },
    isBottom() {
      const scrollY = window.pageYOffset;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      this.bottom = this.isBottom();
    });

    if (this.getLoadedPostList.length < 1) {
      this.init();
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/styles/mixin';

.board__header {
  position: fixed;
  left: 0;
  right: 0;
  box-shadow: 2px 0 3px 1px #d5d5d5;

  .board__title {
    background-color: #b7f0b1;
    padding: 0.7em 0;
    color: #000;
    font-size: 1.2em;
    font-weight: 700;
    text-align: center;
  }

  .board__nav {
    background-color: #f8f9fa;
    padding: 12px;
    .clearfix;

    @buttonPadding: 0.3em;
    
    .board__filter {
      display: block;
      float: left;
      padding: @buttonPadding;
      border: 1px solid #000;
      background-color: #000;
      color: #fff;
      outline: none;
      font-size: 1em;
      cursor: pointer;

      &:hover {
        background-color: #fff;
        color: #000;
      }
    }

    .board__sortGroup {
      float: right;
      border: 1px solid #000;
      .clearfix;

      input {
        display: none;

        & + label {
          color: #000;
        }

        &:checked + label {
          background-color: #000;
          color: #fff;
        }
      }

      label {
        display: block;
        float: left;
        padding: @buttonPadding;
        cursor: pointer;
        font-size: 1em;
      }
    }
  }
}

.board__body {
  padding: 7.5em 2em 1.5em;

  .border__item {
    margin-bottom: 20px;
  }
}

.filterModal {
  &__title {
    font-size: 1.3em;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__body {
    text-align: center;
  }
}

</style>