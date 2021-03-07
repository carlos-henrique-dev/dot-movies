<template>
  <div class="card">
    <div class="cover">
      <i
        @click="handleWishList({ ...movie, price })"
        class="fas fa-heart"
        :class="!!isOnWishList(movie.id) ? 'on-wish' : ''"
      ></i>
      <div class="release-date">
        <span>{{ getDate(movie.release_date) }}</span>
      </div>
      <img :src="getImageUrl(movie.poster_path)" />
    </div>

    <div class="details">
      <h1 class="title">{{ movie.title }}</h1>

      <div class="info">
        <div class="votes">
          <i class="fas fa-star"></i>
          <span>{{ movie.vote_average }}</span>
        </div>

        <div class="genre">
          <span>{{ movieGenre(movie.genre_ids[0]) }}</span>
        </div>
      </div>

      <span class="price">
        {{ renderPrice(price) }}
      </span>
    </div>

    <div class="action" :class="!!isOnCart(movie.id) ? 'on-cart' : ''">
      <button @click="addRemoveMovie({ ...movie, price })">
        {{ !isOnCart(movie.id) ? "Adicionar" : "Remover" }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import currencyParser from "../../helpers/currencyParser";
import urlGenerator from "../../helpers/urlGenerator";
import dateParser from "../../helpers/dateParser";

export default {
  name: "MovieCard",
  props: {
    movie: Object,
  },
  methods: {
    ...mapActions([
      "actionAddToCart",
      "actionAddToWishList",
      "actionRemoveFromWishList",
      "actionRemoveFromCart",
    ]),
    renderPrice(value) {
      return currencyParser(value);
    },
    addRemoveMovie(movie) {
      if (this.$store.getters.isOnCart(movie.id)) {
        this.actionRemoveFromCart(movie.id);
      } else {
        this.actionAddToCart(movie);
      }
    },
    getImageUrl(url) {
      return urlGenerator(url);
    },
    getDate: (release_date) => {
      return dateParser(release_date);
    },
    randomPrice: () => Math.floor(Math.random() * 10000 + 2000) / 100,
    handleWishList(movie) {
      const item = this.$store.getters.isOnWishList(movie.id);
      if (item) {
        this.actionRemoveFromWishList(movie.id);
      } else {
        this.actionAddToWishList(movie);
      }
    },
  },
  computed: {
    ...mapGetters(["movieGenre", "isOnWishList", "isOnCart"]),
  },

  data() {
    return {
      price: this.randomPrice(),
    };
  },
};
</script>

<style lang="scss">
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  position: relative;
  transition: transform 0.3s;
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .cover {
    position: relative;

    i,
    .release-date {
      position: absolute;
    }
    i {
      font-size: 20px;
      color: #aaaaaa;
      top: 0;
      right: 0;
      margin: 10px 10px 0 0;
      cursor: pointer;
      transition: transform 0.3s;

      &.on-wish {
        color: #f03434;
      }
    }

    .release-date {
      bottom: 0;
      margin-bottom: 5px;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);

      span {
        font-size: 14px;
        color: #fff;
        text-align: center;
      }
    }

    img {
      width: 100%;
      height: 240px;
      object-fit: fill;
      border-radius: 5px 5px 0 0;
    }

    i:hover,
    i:active {
      transform: scale(1.3);
    }
  }

  .details {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      font-size: 15px;
      margin: 0 0 10px;
      font-weight: 600;
    }

    .info {
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: space-around;
      margin: 0 0 10px;

      .votes {
        i {
          color: #fbe192;
          margin-right: 5px;
        }
        span {
          font-weight: bold;
        }
      }

      .genre {
        color: #8a8a8a;
      }
    }

    .price {
      margin: 0 0 10px;
    }
  }

  .action {
    width: 100%;

    button {
      cursor: pointer;
      border: none;
      background: #6558f5;
      color: #fff;
      width: 100%;
      height: 35px;
      padding: 10px;
      border-radius: 0 0 5px 5px;
      letter-spacing: 2px;
      font-weight: 600;
      transition: font-size 0.3s;
    }

    button:hover {
      font-size: 16px;
    }

    &.on-cart {
      button {
        background: #f64747;
      }
    }
  }
}

.card:hover {
  transform: scale(1.05);
}

@media (max-width: 900px) {
  .card {
    .cover {
      img {
        height: 180px;
      }
    }
  }
}
</style>