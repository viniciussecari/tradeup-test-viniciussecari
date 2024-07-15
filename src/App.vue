<template>
  <v-app>
    <header-menu />

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue';

export default {
  name: 'App',

  components: {
    HeaderMenu,
  },
};
</script>

<style>
.align-items-center {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
