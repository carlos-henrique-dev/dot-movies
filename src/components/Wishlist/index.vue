<template>
  <Menu :showMenu="showWishList" @toggleMenu="toggleWishList">
    <div class="empty-list" v-show="allWishListItems.length === 0">
      <span>Você não possui nenhum item nos favoritos</span>
    </div>
    <div v-show="allWishListItems.length > 0">
      <div class="wishlist-header">
        <h1>Meus favoritos</h1>
        <span @click="actionClearWishList">Esvaziar</span>
      </div>

      <div class="wish-list-content">
        <div v-for="wishListItem in allWishListItems" :key="wishListItem.id">
          <WishListItem :item="wishListItem" />
        </div>
      </div>
    </div>
  </Menu>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import WishListItem from "./WishListItem";
import Menu from "../Menu/index";

export default {
  name: "WishList",
  components: { WishListItem, Menu },
  computed: mapGetters(["showWishList", "allWishListItems"]),
  methods: {
    ...mapActions(["toggleWishList", "actionClearWishList"]),
  },
};
</script>

<style lang="scss" scoped>
.empty-list {
  padding: 30px;
  color: #bababa;
  margin-top: 80px;
  text-align: center;
}

.wishlist-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;

  h1 {
    font-size: 16px;
    margin: 0;
  }
  span {
    color: #6558f5;
    text-decoration: underline;
    cursor: pointer;
  }
}

.wish-list-content {
  margin-top: 30px;
}
</style>