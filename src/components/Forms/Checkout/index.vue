<template>
  <div class="checkout-container">
    <div class="back-btn">
      <div class="btn-container">
        <router-link to="/">
          <i class="fas fa-angle-left"></i> <span> Voltar</span>
        </router-link>
      </div>
    </div>

    <div class="title">
      <h1>Finalizar compra</h1>
    </div>
    <div class="content">
      <user-form :formData="formData" ref="form" />
      <cart-summary @finish-purchase="validateFormData" />
    </div>
  </div>

  <transition name="modal" v-show="submittedAlert.show">
    <div class="sumbitted-alert" :class="submittedAlert.show ? 'show' : ''">
      <div class="content">
        <h1>Obrigado, {{ submittedAlert.userName }}!</h1>
        <span>Sua compra foi finalizada com sucesso!</span>
        <router-link to="/" @click="closeSubmmittedAlert">
          Ir para loja
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script>
import UserForm from "./UserForm";
import CartSummary from "./CartSummary";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CheckoutForm",
  components: {
    UserForm,
    CartSummary,
  },
  data() {
    return {
      formData: {},
    };
  },
  computed: mapGetters(["submittedAlert", "isSubmitting"]),
  methods: {
    ...mapActions(["actionRemoveFromCart", "closeSubmmittedAlert"]),
    async validateFormData() {
      const form = this.$refs.form.$refs.userInfoForm;
      const validation = await form.validate();
      if (validation.valid) {
        this.$store.dispatch("submitForm", this.formData);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 30px 70px 0;

  .back-btn {
    width: 100%;
    align-items: flex-start;
    margin-bottom: 10px;

    .btn-container {
      width: 80px;
      a {
        text-decoration: none;
        cursor: pointer;
        background: #6558f5;
        border-radius: 10px;
        padding: 5px 10px;
        color: #fff;
        transition: transform 0.3s;
      }
    }

    .btn-container:active {
      transform: scale(0.95);
    }
  }

  .title {
    display: block;
    width: 100%;
    margin-bottom: 30px;
    h1 {
      color: #293845;
      margin: 0;
      font-weight: normal;
      font-size: 28px;
    }
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.sumbitted-alert {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity 0.3s ease;

  .content {
    transition: all 0.3s ease;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 100px);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    text-align: center;
    width: 300px;
    height: 200px;
    background: #fff;
    border: 3px solid #cecece;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.1);
  }

  h1 {
    margin: 0;
    color: #585858;
    font-size: 20px;
    font-weight: 400;
  }

  span {
    font-size: 12px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    width: 80%;
    background: #6558f5;
    border: none;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    border-radius: 5px;
    transition: transform 0.3s;
  }

  a:active {
    transform: scale(0.95);
  }
  a:focus {
    outline: none;
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media (max-width: 900px) {
  .checkout-container {
    padding: 30px 30px 70px;
    .content {
      flex-direction: column;
    }
  }
}
</style>


