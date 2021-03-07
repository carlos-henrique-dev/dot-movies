const state = {
  isSubmitting: false,
  submittedAlert: {
    succeded: false,
    show: false,
    userName: "",
  },
};

const getters = {
  submittedAlert: (state) => state.submittedAlert,
  isSubmitting: (state) => state.isSubmitting,
};

const actions = {
  async submitForm({ commit }, formData) {
    commit("toggleSubmitting");
    setTimeout(() => {
      commit("submittedResponse", formData.name);
      commit("toggleSubmitting");
    }, 2000);
  },
  closeSubmmittedAlert({ commit }) {
    commit("closeAlert");
    commit("clearCart");
  },
};

const mutations = {
  toggleSubmitting: (state) => (state.isSubmitting = !state.isSubmitting),
  submittedResponse: (state, name) => (state.submittedAlert = { succeded: true, show: true, userName: name }),
  closeAlert: (state) =>
    (state.submittedAlert = {
      succeded: false,
      show: false,
      userName: "",
    }),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
