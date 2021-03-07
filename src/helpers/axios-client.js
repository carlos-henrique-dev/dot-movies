import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    language: "pt-BR",
    api_key: process.env.VUE_APP_TMDB_API_KEY,
  },
});

export default axiosClient;
