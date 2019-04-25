<template>
  <article class="reply">
    <p class="reply__contents">{{ contents }}</p>
    <div class="reply__writeInfo">
      <span class="reply__email">{{ email }}</span> |
      <span class="reply__date">{{ updatedDate }}</span>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Reply',
  props: {
    replyData: {
      type: Object,
      require: true
    }
  },
  computed: {
    contents() {
      return this.replyData.contents;
    },
    email() {
      return this.replyData.email;
    },
    updatedDate() {
      return this.replyData.updated_at;
    }
  }
}
</script>

<style lang="less" scoped>
.reply {
  border-top: 1px solid #a6a6a6;
  margin-top: 20px;
  padding: 0.5em 0 0.8em;
  
  .reply__contents {
    line-height: 1.5;
    margin-bottom: 15px;
  }

  .reply__writeInfo {
    text-align: right;
    color: #8c8c8c;
    margin-bottom: 5px;
  }
}
</style>
