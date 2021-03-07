import axiosClient from "../../helpers/axios-client";

const state = {
  movies: [],
  loading: false,
  page: 1,
  filterOn: false,
};

const getters = {
  allMovies: (state) => state.movies,
  isLoading: (state) => state.loading,
  filterOn: (state) => state.filterOn,
};

const actions = {
  setFilter({ commit }, flag) {
    commit("setFilter", flag);
  },
  async getMovies({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit("toggleLoading");
      commit("setFilter", false);

      axiosClient
        .get("movie/popular", {
          params: { page: state.page },
        })
        .then((response) => {
          commit("toggleLoading");
          commit("setMovies", response.data.results);
          commit("incrementPage");
          resolve({ status: 200 });
        })
        .catch((err) => {
          commit("toggleLoading");
          commit("setMovies", []);

          reject({ status: 400 });
        });
    });
  },
  async searchMovies({ commit }, query) {
    return new Promise((resolve, reject) => {
      commit("toggleLoading");
      commit("setFilter", true);
      axiosClient
        .get("search/movie", {
          params: { query },
        })
        .then((response) => {
          commit("toggleLoading");
          commit("setSearch", response.data.results);
          resolve({ status: 200 });
        })
        .catch((err) => {
          commit("toggleLoading");
          commit("setMovies", []);
          reject({ status: 400 });
        });
    });
  },
  cleanMovies({ commit }) {
    commit("cleanMovies");
  },
};

const mutations = {
  cleanMovies: (state) => (state.movies = []),
  setMovies: (state, movies) => (state.movies = [...state.movies, ...movies]),
  setSearch: (state, movies) => (state.movies = movies),
  toggleLoading: (state) => (state.loading = !state.loading),
  incrementPage: (state) => (state.page = state.page + 1),
  setFilter: (state, flag) => (state.filterOn = flag),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
