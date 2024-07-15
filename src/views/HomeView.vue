<template>
  <div class="home align-items-center">
    <h1 class="home__title">Bem vindo ao nosso sistema de <a href="/search">busca de CEP's</a></h1>

    <div class="home__image" />

    <h2 class="home__description">
      Use nosso sistema para obter informações sobre os endereços desejados...
    </h2>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home__image{
  background-image: url('../assets/StockCake-Sculpted\ World\ Map_1720666355.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  object-fit: cover;

  height: 300px;
  width: 100%;
}

.home__title, .home__description {
  margin: 16px 0px ;
}

a {
  text-decoration: none;
  color: #4caf50 !important;
}
</style>
