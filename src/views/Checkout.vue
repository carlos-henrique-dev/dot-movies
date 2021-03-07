<template>
  <div class="checkout page">
    <div class="empty" v-show="allCartItems.length === 0">
      <div class="message">
        <h1>Seu carrinho está vazio</h1>
        <h3>
          É necessário ter pelo menos um filme no carrinho para fazer o
          checkout.
        </h3>
      </div>
      <router-link to="/">Ir para loja</router-link>
    </div>

    <div v-show="allCartItems.length > 0">
      <CheckoutForm />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CheckoutForm from "../components/Forms/Checkout/index";

export default {
  name: "Checkout",
  components: { CheckoutForm },
  computed: mapGetters(["showCart", "allCartItems", "cartTotalPrice"]),
  methods: {
    ...mapActions(["toggleCart"]),
  },
  mounted() {
    if (this.$store.getters.showCart) {
      this.toggleCart();
    }
  },
};
</script>

<style lang="scss" scoped>
.empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;

  .message {
    text-align: center;
    h1 {
      color: #8dd7cf;
    }
    h3 {
      color: #474747;
      font-weight: normal;
    }
  }

  a {
    margin-top: 30px;
    text-decoration: none;
    cursor: pointer;
    background: #8dd7cf;
    border-radius: 10px;
    padding: 10px 20px;
    color: #fff;
    transition: transform 0.3s;
  }

  a:active {
    transform: scale(0.95);
  }
}
</style>