/* eslint-disable import/no-named-default */
import Vue from 'vue';
import Vuex from 'vuex';
import { default as getZipcode } from '../services/service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    addresses: [],
    status: 'idle',
  },

  getters: {
    getAddresses(state) {
      return state.addresses;
    },

    isLoading(state) {
      return state.status;
    },
  },

  mutations: {
    SET_SEARCH_STATUS(state, status) {
      state.status = status;
    },

    SET_ADDRESSES(state, { address, redoList }) {
      if (redoList) state.addresses = address;
      else state.addresses.push(address);
    },
  },

  actions: {
    async searchZipcode({ commit }, code) {
      commit('SET_SEARCH_STATUS', 'loading');

      try {
        const { data } = await getZipcode(code);

        if (data.erro !== 'true') {
          commit('SET_ADDRESSES', { address: data });
          commit('SET_SEARCH_STATUS', 'ok');
        } else {
          throw new Error('Verifique o formato do seu cep.');
        }
      } catch (error) {
        commit('SET_SEARCH_STATUS', error.message);
      }
    },

    deleteZipcode({ commit, state }, zip) {
      const { addresses } = state;
      const newList = addresses.filter((el) => el.cep !== zip);
      commit('SET_ADDRESSES', ({ address: newList, redoList: true }));
    },
  },
});
