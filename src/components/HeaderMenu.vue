<template>
  <v-app-bar app>
    <v-tabs centered color="success">
      <v-tab to="/"> Home </v-tab>
      <v-tab to="/search"> Buscar </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name: 'headerMenu',
};
</script>
