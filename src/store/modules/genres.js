import axiosClient from "../../helpers/axios-client";

const state = {
  genres: [],
};

const getters = {
  allGenres: (state) => state.genres,
  movieGenre: (state) => (id) => {
    const genre = state.genres.find((genre) => genre.id === id);
    if (!genre) return "-";
    return genre.name;
  },
};

const actions = {
  async getGenres({ commit }) {
    return new Promise((resolve, reject) => {
      axiosClient
        .get("/genre/movie/list")
        .then((response) => {
          commit("setGenres", response.data.genres);
          resolve({ status: 200 });
        })
        .catch((err) => {
          reject({ status: 400 });
        });
    });
  },
};

const mutations = {
  setGenres: (state, genres) => (state.genres = genres),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
