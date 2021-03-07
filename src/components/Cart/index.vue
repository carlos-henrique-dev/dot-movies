<template>
  <Menu :showMenu="showCart" @toggleMenu="toggleCart">
    <div class="title">
      <h1>Meu carrinho</h1>
      <span v-show="allCartItems.length > 0" @click="clearCart">Esvaziar</span>
    </div>

    <div class="empty-list" v-show="allCartItems.length === 0">
      <span>Seu carrinho está vazio</span>
    </div>

    <div v-show="allCartItems.length > 0">
      <div class="cart-content">
        <div v-for="cartItem in allCartItems" :key="cartItem.id">
          <CartItem :item="cartItem" />
        </div>
      </div>

      <div class="cart-total">
        <span>Total:</span>
        <span class="total-price">
          {{ renderPrice(cartTotalPrice) }}
        </span>
      </div>

      <router-link
        class="action"
        :to="allCartItems.length === 0 ? '' : '/checkout'"
        :class="allCartItems.length === 0 ? 'disabled' : ''"
      >
        Finalizar compra
      </router-link>
    </div>
  </Menu>
</template>

<script>
import CartItem from "./CartItem";
import { mapGetters, mapActions } from "vuex";
import Menu from "../Menu/index";
import currencyParser from "../../helpers/currencyParser";

export default {
  name: "Cart",
  components: { CartItem, Menu },
  computed: mapGetters(["showCart", "allCartItems", "cartTotalPrice"]),
  methods: {
    ...mapActions(["toggleCart", "clearCart"]),
    renderPrice(value) {
      return currencyParser(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.empty-list {
  padding: 30px;
  color: #bababa;
  margin-top: 30px;
  text-align: center;
}

.title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding: 0 5px;

  h1 {
    text-align: center;
    font-size: 20px;
    color: #585858;
    align-self: center;
  }

  span {
    cursor: pointer;
    text-decoration: underline;
    align-self: center;
    color: #6558f5;
  }
}

.cart-content {
  box-sizing: border-box;
  padding: 0 5px;
}

.cart-total {
  position: relative;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  .total-price {
    font-weight: bold;
  }
}

a {
  float: right;
  margin-top: 30px;
  text-decoration: none;
  background: #6558f5;
  border: none;
  padding: 10px 5px;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &.disabled {
    background: #797979;
  }
}
</style>