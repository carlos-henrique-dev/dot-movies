<template>
  <div class="cart-summary">
    <table>
      <tr>
        <th>Imagem</th>
        <th>Nome</th>
        <th>Qtd</th>
        <th>Preço</th>
      </tr>

      <tr v-for="cartItem in allCartItems" :key="cartItem.di">
        <td><img :src="getImageUrl(cartItem.poster_path)" /></td>
        <td>{{ cartItem.title }}</td>
        <td>1</td>
        <td>{{ renderPrice(cartItem.price) }}</td>
        <td>
          <i
            @click="actionRemoveFromCart(cartItem.id)"
            class="fas fa-trash"
          ></i>
        </td>
      </tr>
    </table>

    <div class="cart-total">
      <span>Total:</span>
      <span class="total-price">{{ renderPrice(cartTotalPrice) }}</span>
    </div>

    <button @click.prevent="$emit('finish-purchase')">
      <i v-show="isSubmitting" class="fas fa-spinner fa-spin"></i>
      <span v-show="!isSubmitting">Finalizar</span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import currencyParser from "../../../helpers/currencyParser";
import urlGenerator from "../../../helpers/urlGenerator";

export default {
  name: "CartSummary",
  computed: mapGetters(["allCartItems", "cartTotalPrice", "isSubmitting"]),
  methods: {
    ...mapActions(["actionRemoveFromCart"]),
    renderPrice(value) {
      return currencyParser(value);
    },
    getImageUrl(url) {
      return urlGenerator(url);
    },
    isRequired(value) {
      return value ? true : "Campo obrigatório";
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-summary {
  width: 45%;
  box-sizing: border-box;

  table {
    flex: 1 1 auto;
    text-align: left;
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      margin-right: 5px;
    }

    th {
      padding-bottom: 10px;

      font-weight: normal;
      color: #7b7b7b;
    }

    tr {
      td:nth-child(3) {
        text-align: center;
      }
    }

    img {
      width: 60px;
      height: 60px;
    }

    i {
      color: #8d8d8d;
      cursor: pointer;
    }

    i:hover,
    i:active {
      color: red;
    }
  }

  .cart-total {
    position: relative;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    .total-price {
      font-weight: bold;
    }
  }

  button {
    cursor: pointer;
    width: 100%;
    background: #6558f5;
    border: none;
    padding: 15px 0;
    font-size: 16px;
    color: #fff;
    border-radius: 5px;
    margin-top: 30px;
    transition: transform 0.3s;
  }

  button:active {
    transform: scale(0.95);
  }
  button:focus {
    outline: none;
  }
}

@media (max-width: 900px) {
  .cart-summary {
    margin-top: 30px;
    width: 100%;
  }
}
</style>