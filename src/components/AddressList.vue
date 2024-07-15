<template>
  <div class="my-4 list__body">
    <v-alert v-if="!getAddresses.length" dense type="info">Nenhum cep pesquisado...</v-alert>

    <div v-else>
      <v-expansion-panels multiple popout>
        <address-item v-for="i in getAddresses" :key="i.cep" :item="i" />
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AddressItem from './AddressItem.vue';

export default {
  name: 'addressList',

  components: {
    AddressItem,
  },

  computed: {
    ...mapGetters(['getAddresses']),
  },
};
</script>

<style scoped>
.list__body {
  width: 400px;
}

.v-expansion-panel-header__icon{
  order: -1;
  margin: 0px 4px;
}
</style>
