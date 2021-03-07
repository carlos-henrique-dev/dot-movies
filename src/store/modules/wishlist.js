const state = {
  wishListItems: [],
  showWishList: false,
};

const getters = {
  allWishListItems: (state) => state.wishListItems,
  showWishList: (state) => state.showWishList,
  isOnWishList: (state) => (id) => state.wishListItems.find((elem) => elem.id === id),
};

const actions = {
  toggleWishList({ commit, rootState }) {
    if (rootState.cart.showCart) {
      commit("toggleCart");
    }
    commit("toggleWishList");
  },
  actionAddToWishList({ commit }, movie) {
    commit("addToWishList", movie);
  },
  actionRemoveFromWishList({ commit }, id) {
    commit("removeFromWishList", id);
  },
  actionClearWishList({ commit }) {
    commit("clearWishList");
  },
};

const mutations = {
  toggleWishList: (state) => {
    if (state.showCart) {
      state.showCart = false;
    }
    state.showWishList = !state.showWishList;
  },
  addToWishList: (state, item) => (state.wishListItems = [...state.wishListItems, item]),
  removeFromWishList: (state, id) => (state.wishListItems = state.wishListItems.filter((item) => item.id !== id)),
  clearWishList: (state) => (state.wishListItems = []),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
