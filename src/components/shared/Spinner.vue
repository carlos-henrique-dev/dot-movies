<template>
  <div class="spinner-container">
    <div class="spinner"></div>
    <span>Buscando...</span>
  </div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style lang="scss">
.spinner-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  .spinner {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #8dd7cf;
    width: 100px;
    height: 100px;
    animation: spin 2s linear infinite;
    margin-bottom: 30px;
  }

  span {
    font-size: 20px;
    color: #8dd7cf;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>