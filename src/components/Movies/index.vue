<template>
  <Spinner v-show="isLoading" />
  <div class="movies-container">
    <div v-for="movie in allMovies || []" :key="movie.id">
      <MovieCard :movie="movie" />
    </div>
  </div>
  <div class="no-movie" v-show="!isLoading && allMovies.length === 0">
    <span>Nenhum filme encontrado </span>
    <i class="fas fa-frown"></i>
  </div>
  <div v-show="showBackToTop" class="back-to-top" @click="scrollTop">
    <i class="fas fa-arrow-alt-circle-up"></i>
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
    scrollTop() {
      window.scrollTo(0, 0);
    },
    scroll() {
      window.onscroll = () => {
        if (window.scrollY === 0) {
          this.showBackToTop = false;
        }
        if (window.scrollY > 300) {
          this.showBackToTop = true;
        }
        if (
          window.innerHeight + window.scrollY + 70 >=
            document.body.scrollHeight &&
          !this.$store.getters.filterOn
        ) {
          this.getMovies();
        }
      };
    },
  },
  computed: mapGetters(["allMovies", "isLoading"]),
  data() {
    return {
      showBackToTop: false,
    };
  },
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
.back-to-top {
  position: fixed;
  z-index: 50px;
  bottom: 30px;
  right: 30px;
  border-radius: 50px;
  box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.5);
  i {
    cursor: pointer;
    font-size: 60px;
    color: #f03434;
    transition: transform 0.3s;
  }
  i:active {
    transform: scale(0.9);
  }
}
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