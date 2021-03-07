<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <Cart />
  <WishList />
</template>

<script>
import Header from "./components/shared/Header";
import Cart from "./components/Cart/index";
import WishList from "./components/Wishlist/index";

export default {
  name: "App",
  components: { Header, Cart, WishList },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  scroll-behavior: smooth;
  margin: 0;
}

html {
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.page {
  padding-top: 50px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
