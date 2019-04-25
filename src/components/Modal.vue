<template>
  <div class="modal" v-if="isModalShow" @click.self="closeModal">
    <div class="modal__bg"></div>
    <div class="modal__body">
      <p class="modal__close">
        <span @click="closeModal"><i class="fas fa-times"></i></span>
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isModalShow: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('update:isModalShow', !this.isModalShow);
    }
  }
};
</script>

<style lang="less" scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .7);
  }

  .modal__body {
    width: 50vw;
    padding: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 5px;

    .modal__close {
      text-align: right;
      font-size: 1.3em;

      & span {
        display: inline-block;
        cursor: pointer;
      }
    }
  }
</style>
