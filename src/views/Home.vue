<template>
  <div class="home page">
    <Movies />
  </div>
</template>

<script>
import Movies from "../components/Movies/index";

export default {
  name: "Home",
  components: { Movies },
};
</script>
