<template>
  <div class="movies-container">
    <div v-for="movie in allMovies || []" :key="movie.id">
      <MovieCard :movie="movie" />
    </div>
  </div>
  <Spinner v-show="isLoading" />
  <div class="no-movie" v-show="!isLoading && allMovies.length === 0">
    <span>Nenhum filme encontrado </span>
    <i class="fas fa-frown"></i>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieCard from "./MovieCard";
import Spinner from "../shared/Spinner";
export default {
  name: "Movies",
  components: { MovieCard, Spinner },
  computed: mapGetters(["cartItemsAmount"]),
  methods: {
    ...mapActions(["getMovies", "getGenres"]),
    scroll() {
      window.onscroll = () => {
        if (
          window.innerHeight + window.scrollY >= document.body.scrollHeight &&
          !this.$store.getters.filterOn
        ) {
          this.getMovies();
        }
      };
    },
  },
  computed: mapGetters(["allMovies", "isLoading"]),

  created() {
    this.getGenres();
    this.getMovies();
  },
  mounted() {
    this.scroll();
  },
};
</script>

<style lang="scss">
.movies-container {
  padding: 50px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem;
  @media (min-width: 1080px) {
    grid-template-columns: repeat(7, 1fr);
  }
  @media (max-width: 900px) {
    padding: 50px 25px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 600px) {
    padding: 50px 25px;
    grid-template-columns: repeat(2, 1fr);
  }
}

.no-movie {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 50px 0 0;
  text-align: center;

  span,
  i {
    color: #8dd7cf;
  }
  span {
    font-size: 20px;
  }
  i {
    margin-top: 10px;
    font-size: 30px;
  }
}
</style>