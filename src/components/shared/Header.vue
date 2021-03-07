<template>
  <div class="nav">
    <router-link to="/">
      <h1>LOGO</h1>
    </router-link>

    <div
      v-show="windowWidth"
      class="search-bar"
      :class="showSearchBar ? 'show-search' : 'hide'"
    >
      <input
        type="text"
        class="search"
        placeholder="Pesquisa"
        v-model="query"
        @keyup.enter="search"
      />
      <i @click="search" class="fas fa-search"></i>
    </div>

    <div class="options">
      <i
        @click="showSearchBar = !showSearchBar"
        class="fas fa-search search-btn"
        v-show="windowWidth <= 768"
      ></i>
      <i @click.prevent="toggleWishList" class="fas fa-heart wish-list"></i>
      <div @click.prevent="toggleCart">
        <span class="cart-count" :class="cartItemsAmount !== 0 ? 'show' : ''">{{
          cartItemsAmount
        }}</span>
        <i class="fas fa-shopping-cart cart"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["cartItemsAmount", "filterOn"]),
  },
  data() {
    return {
      query: "",
      windowWidth: window.innerWidth,
      showSearchBar: this.windowWidth >= 768,
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  methods: {
    ...mapActions([
      "toggleCart",
      "toggleWishList",
      "searchMovies",
      "getMovies",
      "setFilter",
      "cleanMovies",
    ]),
    search() {
      if (this.windowWidth <= 900) {
        this.showSearchBar = !this.showSearchBar;
      }
      if (this.query !== "") {
        this.searchMovies(this.query);
      } else {
        this.cleanMovies();
        this.getMovies();
      }
    },
  },
};
</script>

<style lang="scss">
.nav {
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  z-index: 10;
  background: #8dd7cf;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  padding: 0 40px;
  height: 50px;

  a {
    text-decoration: none;
    align-self: center;
    h1 {
      margin: 0;
      color: #fff;
      font-size: 28px;
    }
  }

  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 300px;
    height: 35px;
    padding: 0 10px;
    background: #fff;
    border: 2px solid #cacaca;
    border-radius: 3px;

    .search {
      border: none;
      width: 100%;
      height: 28px;
    }

    .search:focus {
      outline: none;
    }

    i {
      cursor: pointer;
      color: #b8b8b8;
      font-weight: 600;
      font-size: 20px;
      transition: transform 0.3s;
    }

    i:hover,
    i:active {
      color: #8dd7cf;
      transform: scale(1.1);
    }
  }

  .options {
    display: flex;
    margin: auto 0;
    position: relative;

    .cart-count {
      cursor: pointer;
      position: absolute;
      top: -8px;
      right: -8px;
      background: #fbe192;
      height: 20px;
      width: 20px;
      padding: auto;
      text-align: center;
      font-size: 12px;
      border-radius: 20px;
      align-self: center;
      z-index: 10;
      transition: transform 0.2s ease-in;
      transform: scale(0);

      &.show {
        transform: scale(1);
      }
    }

    .search-btn,
    .wish-list,
    .cart {
      cursor: pointer;
      color: #fff;
      font-size: 25px;
      font-weight: 600;
      transition: transform 0.3s, color 0.3s;
    }

    .search-btn,
    .wish-list {
      margin-right: 20px;
    }

    .search-btn:active,
    .wish-list:hover,
    .cart:hover,
    .wish-list:active,
    .cart:active {
      color: #fbe192;
      transform: scale(1.2);
    }
  }
}

@media (max-width: 768px) {
  .nav {
    padding: 0 15px;
    justify-content: space-between;
    z-index: 10;

    .options {
      .search-btn,
      .wish-list,
      .cart {
        font-size: 20px;
      }

      .search-btn,
      .wish-list {
        margin-right: 10px;
      }
    }

    .search-bar {
      position: absolute;
      left: 50%;
      transition: all 0.3s;

      &.hide {
        top: -50px;
        transform: translate(-50%, -50px);
      }

      &.show-search {
        top: 30px;
        transform: translate(-50%, 30px);
      }
    }
  }
}
</style>