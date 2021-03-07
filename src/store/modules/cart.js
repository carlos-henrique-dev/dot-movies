const state = {
  cartItems: [],
  showCart: false,
};

const getters = {
  allCartItems: (state) => state.cartItems,
  cartItemsAmount: (state) => state.cartItems.length,
  showCart: (state) => state.showCart,
  isOnCart: (state) => (id) => state.cartItems.find((elem) => elem.id === id),
  cartTotalPrice: (state) =>
    state.cartItems.reduce((total, cartItem) => {
      return total + cartItem.price;
    }, 0),
};

const actions = {
  toggleCart({ commit, rootState }) {
    if (rootState.wishlist.showWishList) {
      commit("toggleWishList");
    }
    commit("toggleCart");
  },
  actionAddToCart({ commit }, movie) {
    commit("addToCart", movie);
  },
  actionRemoveFromCart({ commit }, id) {
    commit("removeFromCart", id);
  },
  clearCart({ commit }) {
    commit("clearCart");
  },
};

const mutations = {
  toggleCart: (state) => (state.showCart = !state.showCart),
  addToCart: (state, movie) => {
    const alreadyExists = state.cartItems.find((item) => item.id === movie.id);
    if (alreadyExists === undefined) {
      state.cartItems = [...state.cartItems, movie];
    }
  },
  removeFromCart: (state, id) => (state.cartItems = state.cartItems.filter((item) => item.id !== id)),
  clearCart: (state) => (state.cartItems = []),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
