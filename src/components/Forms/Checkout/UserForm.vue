<template>
  <Form v-slot="{ errors }" class="user-info-form" ref="userInfoForm">
    <div class="form-control row" :class="errors.name ? 'invalid' : ''">
      <Field
        name="name"
        :rules="formRules.name"
        placeholder="Nome Completo"
        v-model="formData.name"
      />
      <ErrorMessage name="name" />
    </div>

    <div class="form-control col-4" :class="errors.cpf ? 'invalid' : ''">
      <Field
        name="cpf"
        :rules="formRules.cpf"
        v-mask="'###.###.###-##'"
        placeholder="CPF"
        v-model="formData.cpf"
      />
      <ErrorMessage name="cpf" />
    </div>

    <div class="form-control col-4" :class="errors.cellphone ? 'invalid' : ''">
      <Field
        name="cellphone"
        :rules="formRules.cellphone"
        v-mask="'(##) # ####-####'"
        placeholder="Celular"
        v-model="formData.cellphone"
      />
      <ErrorMessage name="cellphone" />
    </div>

    <div class="form-control row" :class="errors.email ? 'invalid' : ''">
      <Field
        name="email"
        :rules="formRules.name"
        placeholder="E-mail"
        v-model="formData.email"
      />
      <ErrorMessage name="email" />
    </div>

    <div class="form-control col-3" :class="errors.cep ? 'invalid' : ''">
      <Field
        name="cep"
        :rules="formRules.cep"
        v-mask="'#####-###'"
        placeholder="CEP"
        v-model="formData.cep"
      />
      <ErrorMessage name="cep" />
    </div>

    <div class="form-control col-5" :class="errors.address ? 'invalid' : ''">
      <Field
        name="address"
        :rules="formRules.address"
        placeholder="Endereço"
        v-model="formData.address"
      />
      <ErrorMessage name="address" />
    </div>

    <div class="form-control col-4" :class="errors.city ? 'invalid' : ''">
      <Field
        name="city"
        :rules="formRules.city"
        placeholder="Cidade"
        v-model="formData.city"
      />
      <ErrorMessage name="city" />
    </div>

    <div class="form-control col-4" :class="errors.state ? 'invalid' : ''">
      <Field
        name="state"
        :rules="formRules.state"
        placeholder="Estado"
        v-model="formData.state"
      />
      <ErrorMessage name="state" />
    </div>
  </Form>
</template>

<script>
import { mapGetters } from "vuex";
import { mask } from "vue-the-mask";
import { Field, Form, ErrorMessage } from "vee-validate";
import { string } from "yup";

export default {
  name: "UserForm",
  directives: { mask },
  inheritAttrs: false,
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  props: {
    formData: {
      type: Object,
    },
  },

  data() {
    return {
      formRules: {
        name: string().required("Campo obrigatório."),
        cpf: string()
          .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "Formato inválido.")
          .required("Campo obrigatório."),
        cellphone: string()
          .matches(/(\(\d{2}\))( \d \d{4,5}\-\d{4})/, "Formato inválido.")
          .required("Campo obrigatório."),
        email: string().email("email inválido.").required("Campo obrigatório."),
        cep: string()
          .matches(/[0-9]{5}-[\d]{3}/, "Formato inválido.")
          .required("Campo obrigatório."),
        address: string().required("Campo obrigatório."),
        city: string().required("Campo obrigatório."),
        state: string().required("Campo obrigatório."),
      },
    };
  },
  computed: mapGetters(["allCartItems"]),
  methods: {
    isRequired(value) {
      return value ? true : "Campo obrigatório";
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info-form {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(8, 1fr);
  width: 45%;
  max-height: 400px;

  .form-control {
    span {
      font-size: 12px;
      line-height: 1;
      color: #f03434;
    }

    color: #fff;
    border-radius: 5px;
    margin: 0 15px 15px 0;

    input {
      height: 35px;
      width: 100%;
      border: 2px solid #cecece;
      border-radius: 5px;
      padding-left: 10px;
      transition: transform 0.3s;
      font-size: 18px;
      color: #595959;
    }

    input::placeholder {
      color: #cecece;
      font-size: 18px;
    }
    input:focus {
      outline: none;
      border: 2px solid #6558f5;
      transform: scale(1.05);
    }

    &.row {
      grid-column: span 8;
    }
    &.col-3 {
      grid-column: span 3;
    }
    &.col-4 {
      grid-column: span 4;
    }
    &.col-5 {
      grid-column: span 5;
    }

    &.invalid {
      margin: 0 15px 0 0;

      input {
        border: 2px solid #f03434;
      }
    }
  }
}

.user-info-form {
  .form-control:nth-last-of-type(-n + 2) {
    margin-bottom: 0;
  }
}

@media (max-width: 900px) {
  .user-info-form {
    width: 100%;
  }
}
</style>