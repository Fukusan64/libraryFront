import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const search = {
  namespaced: true,
  state: {
    keyWord: '',
  },
  mutations: {
    updateKeyWord(state, val) {
      state.keyWord = !val ? '' : val;
    },
  },
};

export default new Vuex.Store({
  strict: true,
  modules: {
    search,
  },
});
