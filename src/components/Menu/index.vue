<template>
  <div class="menu-container" v-bind:class="{ 'show-menu': showMenu }">
    <i @click="$emit('toggleMenu')" class="fas fa-times closebtn"></i>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    showMenu: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-container {
  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 50px;
  right: -300px;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.3s;
  padding: 5px;
  box-sizing: border-box;
  visibility: hidden;

  &.show-menu {
    visibility: inherit;
    right: 0;
    box-shadow: -5px 5px 5px 0 rgba(0, 0, 0, 0.5);
  }

  .closebtn {
    cursor: pointer;
    color: red;
    border: none;
    font-size: 30px;
    font-weight: 600;
  }
}
</style>