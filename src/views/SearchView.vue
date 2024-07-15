<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="search align-items-center">

    <div class="search__actions">
      <v-text-field
        solo
        hide-details="auto"
        placeholder="Digite o cep..."
        v-model="zip"
        v-mask="'#####-###'"
        :rules="[rules.counter, rules.duplicated]"
        @keydown.enter="search"
        :disabled="isLoading === 'loading'"
      />

      <v-btn
        class="search__button"
        icon
        @click="search"
        :disabled="isLoading === 'loading'"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>

    <loader class="my-4" v-if="isLoading === 'loading'" />

    <v-alert
      v-if="hasError"
      class="mt-4"
      type="error"
      dense
    >
      {{ isLoading }}
    </v-alert>

    <address-list />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Loader from '../components/Loader.vue';
import AddressList from '../components/AddressList.vue';

export default {
  name: 'searchView',

  components: {
    Loader,
    AddressList,
  },

  data() {
    return {
      zip: '',
      addresses: [],
      hasError: false,
      canSearch: true,
      rules: {
        counter: (value) => (!!value && value.length <= 9) || 'O cep deve ter 8 dígitos.',
        duplicated: (value) => this.alreadyExists(value) || 'O cep digitado já foi pesquisado.',
      },
    };
  },

  computed: {
    ...mapGetters(['isLoading', 'getAddresses']),
  },

  methods: {
    ...mapActions(['searchZipcode']),

    alreadyExists(value) {
      const ceps = this.getAddresses.map((el) => el.cep);
      return !ceps.includes(value);
    },

    async search() {
      const zipcode = this.zip.replace('-', '');

      if (this.alreadyExists(this.zip)) await this.searchZipcode(zipcode);

      if (this.isLoading !== 'ok' && this.isLoading !== 'loading') this.hasError = true;
      else this.hasError = false;

      this.zip = '';
    },
  },
};
</script>

<style scoped>
.search__actions{
  display: flex;
  align-items: flex-start;

  margin-top: 32px;
}

.search__button {
  margin-top: 8px;
  margin-left: 16px;
}
</style>
