<template>
  <v-expansion-panel class="address__item">
    <v-expansion-panel-header>
      <div class="address__item-header">
        <h4>{{ item.logradouro }} - {{ item.cep }}</h4>

        <v-btn icon @click="removeZipcode(item.cep)">
          <v-icon color="error">
            mdi-delete
          </v-icon>
        </v-btn>
      </div>
    </v-expansion-panel-header>

    <v-expansion-panel-content>
      <div class="d-flex" v-for="(i) in labels" :key="i.label">
        <div class="address__content-label"><strong>{{ i.label }}</strong>: </div>
        <span>{{ item[i.field] || '-' }}</span>
      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'addressItem',

  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      labels: [
        { label: 'Bairro', field: 'bairro' },
        { label: 'Logradouro', field: 'logradouro' },
        { label: 'Localidade', field: 'localidade' },
        { label: 'UF', field: 'uf' },
      ],
    };
  },

  methods: {
    ...mapActions(['deleteZipcode']),

    removeZipcode(zip) {
      this.deleteZipcode(zip);
    },
  },
};
</script>

<style scoped>
.address__item{
  width: 400px;
}

.address__item-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.address__content-label{
  width: 125px;
}
</style>
